import React from 'react'

function Features() {

    const featuresData = [
        {
          icon: 'flaticon-rabbit',
          title: 'Best Service',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
        },
        {
          icon: 'flaticon-wifi-router',
          title: 'Quality guarantee',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
        },
        {
          icon: 'flaticon-solar-energy',
          title: 'Best price',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
        },
        {
          icon: 'flaticon-cycling',
          title: 'Satisfaction guarantee',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
        },
        {
          icon: 'flaticon-fishing',
          title: 'Swimming & Fishing',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
        },
        {
          icon: 'flaticon-gym',
          title: 'GYM and Yoga',
          description: 'We denounce with righteous indignation and dislike men who are so beguiled.',
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