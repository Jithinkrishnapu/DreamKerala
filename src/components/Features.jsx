import React from 'react'

function Features() {

    const featuresData = [
        {
          icon: 'flaticon-hand',
          title: 'Best Service',
          description: 'We take pride in delivering outstanding service and ensuring a seamless experience.',
        },
        {
          icon: 'flaticon-wifi-router',
          title: 'Quality guarantee',
          description: 'We promise top-quality service and maintain high standards for your satisfaction.',
        },
        {
          icon: 'flaticon-solar-energy',
          title: 'Best price',
          description: 'Get the best value with our competitive pricing and exceptional service.',
        },
        {
          icon: 'flaticon-cycling',
          title: 'Satisfaction guarantee',
          description: 'Your satisfaction is our priority; we strive to exceed your expectations.',
        },
        {
          icon: 'flaticon-fishing',
          title: 'Flexible Booking',
          description: 'Enjoy the convenience of flexible booking options that fit your travel plans and needs',
        },
        {
          icon: 'flaticon-gym',
          title: '24/7 Support',
          description: 'Our dedicated support team is available around the clock to assist with any inquiries or issues',
        },
      ];
      
  return (
    <section style={{marginTop:'80px'}} className="features-section pb-60 mt-30">
      <div className="container">
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className={feature.icon} />
                </div>
                <div className="text">
                  <h4 className="title">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features