import React, { useEffect, useState } from 'react';
import useIsMobile from '../../Hooks/useIsMobile';

import Manage_Points from '../../Components/Manage_Points/Manage_Points';
import RewardContainer from '../../Components/RewardContainer/RewardContainer';

import gift_01 from '../../assets/icons/gift-01.png'
import monitor_03 from '../../assets/icons/monitor-03.png'
import Rectangle1 from '../../assets/icons/Rectangle1.png'
import rocket_02 from '../../assets/icons/rocket-02.png'

import PrimaryModal from '../../Components/Modals/PrimaryModal';
import usePrimaryModal from '../../Hooks/usePrimaryModal';
import Reward_Item_Data from '../../Components/Reward_Item_Data/Reward_Item_Data';
import RewardCard from '../../Components/RewardCard/RewardCard ';
import CardLottery from '../../Components/CardLottery/CardLottery';
import CreditCard from '../../Components/CreditCard/CreditCard';
import CoursesCard from '../../Components/CoursesCard/CoursesCard';
import { getAllCategoriesWithProducts } from '../../APIs/categoryApi';

import allIcon_dark from '../../assets/icons/RewardFilterIcon/allIcon_dark.png'
import allIcon_white from '../../assets/icons/RewardFilterIcon/allIcon_white.png'
import Lottery_dark from '../../assets/icons/RewardFilterIcon/Lottery_dark.png'
import Lottery_white from '../../assets/icons/RewardFilterIcon/Lottery_white.png'
import Loading from '../../Components/Loading/Loading';


function Rewards() {

  const { isModalOpen, selectedReward, modalType, openModal, closeModal } = usePrimaryModal();
  const isIPad = useIsMobile(767)

  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('همه');
  const [loading, setLoading] = useState(true);


  const getApiAllCategoriesWithProducts = async () => {
    try {
      setLoading(true);
      const response = await getAllCategoriesWithProducts();
      return response.data.data.items;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApiAllCategoriesWithProducts().then(res => {
      setCategoriesWithProducts(res);
    });
  }, []);

  const sortedCategories = [...categoriesWithProducts].sort((a, b) => {
    if (a.category.title === "محصول") return -1;
    if (b.category.title === "محصول") return 1;
    return 0;
  });

  const filters = [
    { label: "همه", iconDark: allIcon_dark, iconWhite: allIcon_white },
    ...categoriesWithProducts.map((catObj) => {
      const title = catObj.category.title;
      let icons = { iconDark: "", iconWhite: "" };

      switch (title) {
        case "محصول":
          icons = { iconDark: gift_01, iconWhite: gift_01 };
          break;
        case "قرعه کشی":
          icons = { iconDark: Lottery_dark, iconWhite: Lottery_white };
          break;
        case "آموزش":
          icons = { iconDark: monitor_03, iconWhite: monitor_03 };
          break;
        case "واحد صندوق":
        case "اعتبار":
          icons = { iconDark: rocket_02, iconWhite: rocket_02 };
          break;
        default:
          icons = { iconDark: allIcon_dark, iconWhite: allIcon_white };
      }

      return {
        label: title,
        ...icons,
      };
    }),
  ];

  const filteredCategories =
    activeFilter === "همه"
      ? sortedCategories
      : sortedCategories.filter(
        (catObj) => catObj.category.title === activeFilter
      );

  const componentMap = { // یک map از کامپوننت‌ها برای دسته‌ها
    "محصول": RewardCard,
    "کارت هدیه": RewardCard,
    "خیریه": RewardCard,
    "قرعه کشی": CardLottery,
    "آموزش": CoursesCard,
    "اعتبار": CreditCard,
  };

  const iconMap = { // یک map از آیکون‌ها برای دسته‌ها
    "محصول": gift_01,
    "کارت هدیه": gift_01,
    "خیریه": gift_01,
    "قرعه کشی": Rectangle1,
    "آموزش": monitor_03,
    "اعتبار": rocket_02,
  };

  if (loading) return <div className='w-full h-full flex justify-center items-center'><Loading /></div>

  return (
    <div className="rewards w-full h-full flex flex-col py-4 space-y-4 px-2" dir='rtl'>

      {!isIPad ?
        <Manage_Points />
        : null}

      <div className='rewardContainer w-full h-auto p-6 flex flex-col bg-white'>
        {
          <div className='w-full md:w-[400px] h-[42px] border-1 space-x-2.5 flex flex-row justify-between items-center border-neutral-200 rounded-md py-1 px-4'>
            <input className='text-sm flex-1 h-full placeholder:text-gray-400 focus:outline-none' type="text" name="search" placeholder="جستجوی نام جوایز" />
            <button className='text-sm px-6 rounded-sm cursor-pointer h-full bg-secondary-11 text-secondary-9'>جستجو</button>
          </div>
        }
        {(
          <div className='w-full h-max flex flex-row items-center space-x-2 py-8 overflow-x-auto scrollbar-hide'>
            {filters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                className={`cursor-pointer flex flex-row items-center min-w-max space-x-2 px-4 py-1.5 rounded-md border transition-all duration-200 text-sm whitespace-nowrap ${activeFilter === filter.label
                  ? "bg-secondary-3 text-white border-secondary-3 font-semibold"
                  : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                <img
                  src={activeFilter === filter.label ? filter.iconWhite : filter.iconDark}
                  alt=""
                  className="w-4 h-4"
                />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredCategories.map((catObj, index) => {
        const { category, products } = catObj;
        const Component = componentMap[category.title] || RewardCard; // کارکتری که برای این دسته از محصولات استفاده می‌شود
        const icon = iconMap[category.title] || gift_01;

        if (!products || products.length === 0) return null;

        return (
          <RewardContainer key={index} title={category.title} icon={icon}>
            {products.map((product, i) => (
              <Component
                key={i}
                item={product}
                onClick={() => openModal('rewards', product)}
              />
            ))}
          </RewardContainer>
        );
      })}



      {/* مودال جوایز و هدایا */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'rewards'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data closeModal={closeModal} selectedReward={selectedReward} />}
      </PrimaryModal>

      {/* مودال قرعه‌کشی */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'lottery'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data closeModal={closeModal} selectedReward={selectedReward} />}
      </PrimaryModal> */}

      {/* مودال دوره‌های آموزشی */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'courses'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data closeModal={closeModal} selectedReward={selectedReward} />}
      </PrimaryModal> */}

      {/* مودال کمبود امتیاز */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'Insufficient_Credit'}
        onClose={closeModal}
        style={'w-[500px] h-[325px] max-h-[70%]'}
        mobileStyle={'h-[405px]'}
      >
        {selectedReward &&
          <div className='notFound_credit w-full h-full flex flex-col justify-around items-center'>
            <img className='w-[84px] object-contain' src={Insufficient_Credit} alt="" />
            <span className='text-[16px] text-secondary-3'>تعداد سیارات شما کم است !</span>
            <span className='text-sm mb-6 mt-4'>برای تکمیل نیازهای خود، به سیارات بیشتری نیاز دارید.</span>
            <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-[250px] text-[16px] h-[42px] btn_gradient rounded-md text-white cursor-pointer'>نحوه کسب سیاره</button>
          </div>
        }
      </PrimaryModal> */}

      {/* مودال اعتبار */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'credit'}
        onClose={closeModal}
        style={'w-[755px] h-[480px] max-h-[70%]'}
        mobileStyle={'h-[538px]'}
      >
        {selectedReward &&
          <Credit_Modal>
            <div className='w-full h-[36px] flex flex-row justify-between items-center gap-x-8'>
              <button className='w-1/2 sm:w-[125px] text-[16px] h-full border-1 border-secondary-2 text-secondary-2 rounded-md cursor-pointer'>انصراف</button>
              <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-1/2 sm:w-[250px] text-[16px] h-full btn_gradient rounded-md text-white cursor-pointer'>ثبت درخواست</button>
            </div>
          </Credit_Modal>
        }
      </PrimaryModal> */}

      {/* مودال ثبت موفق  */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'success_credit'}
        onClose={closeModal}
        style={'w-[755px] h-[685px] max-h-[85%]'}
        mobileStyle={'h-[635px]'}
      >
        {selectedReward &&
          <Success_Credit_Modal />
        }
      </PrimaryModal> */}

      {/* مودال مورد نظر در سیستم ثبت نشده */}
      {/* <PrimaryModal
        isOpen={isModalOpen && modalType === 'notFound_credit'}
        onClose={closeModal}
        style={'w-[500px] h-[325px] max-h-[85%]'}
        mobileStyle={'h-[405px]'}
      >
        {selectedReward &&
          <div className='notFound_credit w-full h-full flex flex-col justify-around items-center'>
            <img className='w-[130px] object-contain' src={notFound_credit} alt="" />
            <span>این مورد در سیستم ثبت نشده است.</span>
            <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-[250px] text-[16px] h-[42px] btn_gradient rounded-md text-white cursor-pointer'>نحوه کسب سیاره</button>
          </div>
        }
      </PrimaryModal> */}

    </div>
  );
}

export default Rewards;
