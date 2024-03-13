'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review:
      'Sự thân thiện và tận tâm của Giảng viên Nguyễn Hải Ninh đã tạo ra một môi trường học tích cực, trải nghiệm học thoải mái.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Interior Designer',
    review:
      'Giảng viên Nguyễn Hải Ninh không chỉ giảng dạy lý thuyết, mà còn chia sẻ nhiều kinh nghiệm thực tế từ sự nghiệp cá nhân.',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'John Doe',
    job: 'Game Dev',
    review:
      'Giảng viên Nguyễn Hải Ninh không chỉ là người hướng dẫn chuyên nghiệp mà còn là người đồng hành trong sự phát triển cá nhân.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Therapist',
    review:
      'Ông luôn khuyến khích sinh viên tham gia các hoạt động ngoại khóa, dự án nghiên cứu, tạo điều kiện cho sự sáng tạo và phát triển kỹ năng mềm.',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review:
      'Học tại khoa Kinh tế với Giảng viên Ph.D Nguyễn Hải Ninh đã là một hành trình kiến thức tuyệt vời.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Wilson',
    job: 'Video Editor',
    review:
      'Giảng viên Ph.D Nguyễn Hải Ninh nổi bật với sự linh hoạt trong phương pháp giảng dạy với phương tiện truyền đạt và tích hợp công nghệ, tạo nên trải nghiệm học tập đa dạng.',
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
