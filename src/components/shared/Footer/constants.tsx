import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import Visa from '@/public/images/footer/visa.png'
import Mastercard from '@/public/images/footer/mastercard.png'
import Paypal from '@/public/images/footer/paypal.png'
import ApplePay from '@/public/images/footer/apple-pay.png'
import GooglePay from '@/public/images/footer/google-pay.png'

export const SOCIAL_LINKS = [
  {
    icon: <TwitterIcon />,
    href: '#',
  },
  {
    icon: <FacebookIcon />,
    href: '#',
  },
  {
    icon: <InstagramIcon />,
    href: '#',
  },
  {
    icon: <GithubIcon />,
    href: '#',
  },
]

export const COMPANY_LINKS = [
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Works',
    href: '#',
  },
  {
    label: 'Careers',
    href: '#',
  },
]

export const HELP_LINKS = [
  {
    label: 'Customer Support',
    href: '#',
  },
  {
    label: 'Delivery Details',
    href: '#',
  },
  {
    label: 'Terms & Conditions',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
]

export const FAQ_LINKS = [
  {
    label: 'Account',
    href: '#',
  },
  {
    label: 'Manage Deliveries',
    href: '#',
  },
  {
    label: 'Orders',
    href: '#',
  },
  {
    label: 'Payments',
    href: '#',
  },
]

export const RESOURCES_LINKS = [
  {
    label: 'Free eBooks',
    href: '#',
  },
  {
    label: 'Development Tutorial',
    href: '#',
  },
  {
    label: 'How To - Blog',
    href: '#',
  },
  {
    label: 'Youtube Playlist',
    href: '#',
  },
]

export const FOOTER_LINKS = [
  {
    label: 'Company',
    links: COMPANY_LINKS,
  },
  {
    label: 'Help',
    links: HELP_LINKS,
  },
  {
    label: 'FAQ',
    links: FAQ_LINKS,
  },
  {
    label: 'Resources',
    links: RESOURCES_LINKS,
  },
]

export const PAYCARDS = [
  {
    label: 'visa',
    icon: Visa,
  },
  {
    label: 'mastercard',
    icon: Mastercard,
  },
  {
    label: 'paypal',
    icon: Paypal,
  },
  {
    label: 'applepay',
    icon: ApplePay,
  },
  {
    label: 'googlepay',
    icon: GooglePay,
  },
]
