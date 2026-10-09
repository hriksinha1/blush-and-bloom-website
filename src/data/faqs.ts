export type FaqItem = {
  q: string
  a: string
}

export type FaqGroup = {
  topic: 'Booking' | 'Services' | 'Visiting' | 'General'
  items: FaqItem[]
}

export const faqGroups: FaqGroup[] = [
  {
    topic: 'Booking',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'Booking details are still being confirmed. For now, please send an enquiry through the contact page or message the salon on Instagram for the latest availability.',
      },
      {
        q: 'Can I ask about pricing before booking?',
        a: 'Yes. The current service list and pricing are still being finalised, so the best next step is to contact the salon through Instagram or the enquiry form.',
      },
    ],
  },
  {
    topic: 'Services',
    items: [
      {
        q: 'What services are available?',
        a: 'The current treatments are being refined, and the salon will share the final service menu once confirmed. The site is using illustrative demo content until then.',
      },
      {
        q: 'Are these examples the exact treatments on offer?',
        a: 'No. These service and photo examples are illustrative placeholders meant to showcase the design and content structure while the salon confirms its final services.',
      },
    ],
  },
  {
    topic: 'Visiting',
    items: [
      {
        q: 'Where is the salon and when is it open?',
        a: 'The address and opening hours are still to be confirmed. Please contact the salon directly for location details and current opening times.',
      },
      {
        q: 'Can I visit without a booking?',
        a: 'The salon is still confirming its booking process and walk-in arrangements. Please message the salon for the most accurate guidance.',
      },
    ],
  },
  {
    topic: 'General',
    items: [
      {
        q: 'What does the brand stand for?',
        a: 'Blush and Bloom is centred on unhurried, personalised beauty experiences in a soft, warm environment.',
      },
      {
        q: 'How can I keep up with updates?',
        a: 'The salon’s Instagram and Facebook pages are the most current place to follow updates and announcements.',
      },
    ],
  },
]

export const faqList = faqGroups.flatMap((group) => group.items)
