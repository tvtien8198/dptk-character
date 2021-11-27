import React from 'react'
import './About.scss'
import HomeSection from '../HomeSection'
import { TLBody, NPBody, bgAbout, TVBody, VVBody, HNBody, HBDBody } from '../../../assets/data/Images'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, EffectCube } from 'swiper'
import ShowText from '../../ShowText'


const characterImg = [TVBody, HNBody, TLBody, VVBody, NPBody, HBDBody]

SwiperCore.use([Autoplay, Pagination, EffectCube]);

const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: { clickable: true },
    effect: 'cube',
    autoplay:true,
    speed: 1000
}

const About = props => {

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bgAbout}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="description m-t-1">
                        <h3>Tóm tắt nội dung</h3>
                        <ShowText className="show__text">
                            Đấu Phá Thương Khung là một tiểu thuyết của tác giả Thiên Tàm Thổ Đậu, 
                        kể về Tiêu Viêm, một thiếu niên có thiên phú tu luyện và từng được xem là thiên tài của gia tộc cho đến khi mẹ Tiêu Viêm qua đời, 
                        để lại di vật là một hắc sắc giới chỉ, từ đây Tiêu Viêm mất hết thiên phú tu luyện. Thiên tài rơi rụng thành phế vật bị mọi người xem thường trong 3 suốt năm, 
                        rồi bị vị hôn thê từ hôn. Bằng tất cả nỗ lực của bản thân cùng sự dạy dỗ của lão sư Dược Lão 
                        (Dược Trần - Dược Tôn Giả: 1 vị luyện dược tông sư của Đấu Khí Đại Lục), 
                        cùng một chút vận khí, Tiêu Viêm đã và đang trở thành một cường giả đỉnh phong trên Đấu Khí Đại Lục
                        </ShowText>
                    </div>
                    <div className="info m-t-2">
                        <div className="info__cate">
                            <h3>Tác Giả</h3>
                            <p>Thiên Tầm Thổ Đậu</p>
                        </div>
                        <div className="info__author">
                            <h3>Thể loại</h3>
                            <p>Tiên Hiệp, Dị Giới, Huyền Huyễn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    <Swiper {...swiperOptions}>
                        {
                            characterImg.map((item, i) => (
                                <SwiperSlide key={i}>
                                    {({ isActive }) => 
                                        <div className={`welcome__img__frames ${isActive ? 'active' : ''}`}>
                                            <img className="lazyload blur-up" data-src={item} src={item} key={i} alt="" />
                                        </div>
                                    }
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default About
