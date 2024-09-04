import React from 'react'
import { Nav, Tab } from "react-bootstrap";

function TariffComponent() {



    const tabData = [
        {
          eventKey: 'tab1',
          title: 'AC Sedan',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        },
        {
          eventKey: 'tab2',
          title: 'Ertiga',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        },
        {
          eventKey: 'tab3',
          title: 'Innova',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        },
        {
          eventKey: 'tab4',
          title: 'Tempo Traveller',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        },
        {
          eventKey: 'tab5',
          title: 'Mountain Hiking',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        },
        {
          eventKey: 'tab6',
          title: 'Mountain Hiking',
          imgSrc: 'assets/images/gallery/activity.jpg',
          description: 'Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus',
          checkList: [
            'Family Camping',
            'Couple Camping',
            'Wild Camping'
          ]
        }
      ];
      


    
  return (
    <section className="activity-section">
        <div className="activity-wrapper-bgc  text-white black-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title text-white">Affordable and Flexible Pricing</span>
                  <h2>Explore Your Destination with Ease and Comfort</h2>
                </div>
              </div>
            </div>
            <Tab.Container defaultActiveKey="tab1">
      <div className="row">
        <div className="col-lg-4">
          {/*=== Activity Nav Tab ===*/}
          <div className="activity-nav-tab mb-50 wow fadeInLeft">
            <Nav as="ul" className="nav nav-tabs">
              {tabData.map((tab) => (
                <Nav.Item as="li" key={tab.eventKey}>
                  <Nav.Link
                    as="a"
                    href={`#${tab.eventKey}`}
                    className="nav-link"
                    eventKey={tab.eventKey}
                  >
                    {tab.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
        <div className="col-lg-8">
          {/*=== Tab Content ===*/}
          <Tab.Content className="tab-content mb-50 wow fadeInRight">
            {tabData.map((tab) => (
              <Tab.Pane className="tab-pane fade" eventKey={tab.eventKey} key={tab.eventKey}>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    {/*=== Activity Content Box ===*/}
                    <div className="activity-content-box pl-lg-40">
                      <div className="icon">
                        <i className="flaticon-camp" />
                      </div>
                      <h3 className="title">
                        Real Adventure &amp; Enjoy Your Dream Tours
                      </h3>
                      <p>{tab.description}</p>
                      <ul className="check-list">
                        {tab.checkList.map((item, index) => (
                          <li key={index}>
                            <i className="fas fa-badge-check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Activity Image Box ===*/}
                    <div className="activity-image-box">
                      <img
                        src={tab.imgSrc}
                        className="radius-12"
                        alt={tab.title}
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
          </div>
        </div>
      </section>
  )
}

export default TariffComponent