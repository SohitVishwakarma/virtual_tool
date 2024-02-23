import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul>
          <li>Product</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Benefits</li>
        </ul>
      </div>
      
      
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li>Features</li>
          <li>Pricing Plan</li>
          <li>Best Program</li>
          <li>Press Kit</li>
        </ul>
      </div>
      
      
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul>
          <li>About</li>
          <li>Team Member</li>
          <li>Reviews</li>
          <li>Latest News</li>
        </ul>
      </div>
      
    
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Social</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
