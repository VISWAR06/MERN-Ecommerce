import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
   <div className="py-10 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
    <div className="md:w-1/3 p-6 rounded-lg">
      <img src={assets.logo} alt="logo" className="w-32 mb-4" />
      <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, autem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illum sapiente esse officiis fuga voluptatum mollitia eligendi, perferendis deleniti maxime.
      </p>
    </div>

    <div className="md:w-1/4">
      <p className="text-lg font-semibold mb-4">Company</p>
      <ul className="space-y-2 text-sm">
        <li className="cursor-pointer hover:text-red-400">Home</li>
        <li className="cursor-pointer hover:text-red-400">About</li>
        <li className="cursor-pointer hover:text-red-400">Delivery</li>
        <li className="cursor-pointer hover:text-red-400">Privacy Policy</li>
      </ul>
    </div>

    <div className="md:w-1/4">
      <p className="text-lg font-semibold mb-4">For Query</p>
      <ul className="space-y-2 text-sm">
        <li>+91 764738587478</li>
        <li>official@gmail.com</li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Footer
