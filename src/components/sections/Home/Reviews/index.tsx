import { ReviewCard } from '@/components/shared/ReviewCard'
import { Title } from '@/components/system/Typography/Title'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import React from 'react'

const reviews = [
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: 4.6,
    name: 'John Doe',
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
]

export const Reviews = () => {
  return (
    <section className="flex flex-col overflow-hidden ~my-5/12 ~gap-6/10">
      <Title>Out Happy Customers</Title>
      <Carousel>
        <CarouselContent className="select-none overflow-visible">
          {reviews.map((review, index) => (
            <CarouselItem
              className="max-h-[240px] min-h-full max-w-[400px]"
              key={index}
            >
              <ReviewCard
                className="h-full"
                rating={review.rating}
                name={review.name}
                comment={review.comment}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
