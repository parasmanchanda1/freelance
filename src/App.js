

import './App.css';
import PixisContainer from './components/standup.js';
import ThumbnailContainer from './components/thumbnail.js';
import ReelsContainer from './components/reels.js';
import PodcastContainer from './components/podcast.js';
import TestinomialContainer from './components/testnomial.js';
import Lastsection from './components/lastsection.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Sample from './components/samplerecord.js';
import Customer from './components/customer.js';
import Logo from './components/logo.js';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Noto+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

</style>

const testinomials =
  [
    {
      name: 'sahil shah',
      mail: '@sahilshaicomedy',
      content: `I love working with Pratham! He's super fast, dedicated and is always there to make sure you take your idea to the next level.It takes him just a few moments to understand your zone and then you've got the best creative ally in the field. Pratham is super talented and I genuinely can't wait to see where he goes from here.`,
      time : '10:17 PM',
      date : 'Jan 3 , 2023',
      image: '../images/V2.png'
  },
    {
      name: 'Srijan Kaushik',
      mail: '@srijan.kaushik',
      content: `Working with Pratham/ Pixis Media has been extremely smooth. They are professional, well skilled and open to collaboration. They are also quite creative and open to trying new things which makes them a pleasure to work with`,
      time : '10:17 PM',
      image: '../images/V2.png',
      date : 'Jan 3 , 2023'
    },
    {
      name: 'Satshya Tharien',
      mail: '@SatshyaTharien',
      content: `Working with Pratham has been a breeze. He always listens carefully, understands the tangibles and the intangibles of the requirement, and then applies his skills to deliver a quality final product. This reduces stress and multiple back and forth while ensuring quality. I would highly recommend Pratham and his team to anyone looking for a talented editor and a seamless editing
      process.`,
      time : '10:17 PM',
      image: process.env.PUBLIC_URL +'images/vxvagvw.webp',
      date : 'Jan 3 , 2023'
    },
    {
      name: 'Unacademy',
      mail: '@unacademy',
      content: `We were thoroughly impressed with the editing skills and creative vision of Pratham.Their attention to detail and ability to bring our ideas to life in the videos they produced was truly exceptional. The final product exceeded our expectations. We highly recommend Pratham to anyone looking for a talented editor and creative partner.`,
      time : '10:17 PM',
      image: process.env.PUBLIC_URL +'images/vxvagvw.webp',
      date : 'Jan 3 , 2023'
    },
    {
      name: 'Samdish Bhatia',
      mail: '@UNFILTEREDbysamdish',
      content: `Pratham is a delight to collaborate with! His curiosity and his creative abilities allow the content to go one step forward. What sets him apart is the passion with which he approaches each project which makes sure that he only delivers his absolute best.`,
      time : '10:17 PM',
      image: process.env.PUBLIC_URL +'images/vxvagvw.webp',
      date : 'Jan 3 , 2023'
    },
    {
      name: 'Satshya Tharien',
      mail: '@SatshyaTharien',
      content: `Working with Pratham has been a breeze. He always listens carefully, understands the tangibles and the intangibles of the requirement, and then applies his skills to deliver a quality final product. This reduces stress and multiple back and forth while ensuring quality.`,
      time : '10:17 PM',
      image: process.env.PUBLIC_URL +'images/vxvagvw.webp',
      date : 'Jan 3 , 2023'
    }
  ]


const trustors =
[
  {
    name: 'Unfiltered by Samdish',
    image: process.env.PUBLIC_URL + './images/channels4_profile.jpg',
    subscriber: `1m subscribers | Youtube`,
},
  {
    name: 'sahil shah',
    image: process.env.PUBLIC_URL + '/images/V2.png',
    subscriber: `109k subscribers | Youtube`,
  },
  {
    name: 'Satshya Tharien',
    image: process.env.PUBLIC_URL + 'images/2e1c6fcd-0ac6-40e7-990b-d5a7309d6fc7.jpeg',
    subscriber: `432k subscribers | Youtube`,
  },
  {
    name: 'Satshya Tharien',
    image: process.env.PUBLIC_URL + 'images/2e1c6fcd-0ac6-40e7-990b-d5a7309d6fc7.jpeg',
    subscriber: `432k subscribers | Youtube`,
  },
  {
    name: 'Unacademy',
    image: process.env.PUBLIC_URL + 'images/vxvagvw.webp',
    subscriber: `432k subscribers | Youtube`,
  },
  {
    name: 'Sportsmint',
    image: process.env.PUBLIC_URL +'images/unnamed.jpg',
    subscriber: `1m subscribers | Youtube`,
  },
  {
    name: 'Sahil Shah',
    image: process.env.PUBLIC_URL +'/images/V2.png',
    subscriber: `109k subscribers | Youtube`,
  },
  {
    name: 'Unacademy',
    image: process.env.PUBLIC_URL +'images/vxvagvw.webp',
    subscriber: `432k subscribers | Youtube`,
  }
]

const imagePath = '../images/CT20.png';


function App() {
  return (
    <>
      <div className='blue-hue'>
      <div className='group'> 
      <div className='rectangle'>
        </div> 
        <div className='rectangle2'>
        </div>  
        </div> 
      </div>
     
      <div className='color-section2'>
        <Logo />
        <Header />
      <Sample />
      </div>
      

       <div className='trustor-section flex'>
          <h1 className='heading'>Creators who trust us </h1>
          <div className='trustors'>
          {trustors.map((trustor, index) => (
            <Customer 
              image={trustor.image}
              name={trustor.name}
              subscriber={trustor.subscriber}
            />
          ))}
        </div>
      </div>

     <div className="centercontent">
        <h1 className='heading'>We offer a variety of services</h1>
        <h3 className='subheading'>Although our clients request to much more, we have sticked ourselves to these services.</h3>
        <PixisContainer image1="../images/Thumbnail.png" image2="../images/AK1.png" content="Pixis Media is a seasoned editing agency, providing services at competitive pricing. Pixis Media is a seasoned editing agency, providing services at competitive pricing" />
        <PixisContainer image1="../images/AK1.png" image2="../images/T3.png" content="Pixis Media is a seasoned editing agency, providing services at competitive pricing. Pixis Media is a seasoned editing agency, providing services at competitive pricing" />

        
         <div className='content'>
          <ThumbnailContainer image="../images/Copy of Video 2.png" content="Pixis Media is a seasoned editing agency, providing services at competitive pricing. Pixis Media is a seasoned editing agency, providing services at competitive pricing" />
          <ReelsContainer image="../images/download.jpeg" content="Pixis Media is a seasoned editing agency, providing services at competitive pricing. Pixis Media is a seasoned editing agency, providing services at competitive pricing" />
        </div>

         <PodcastContainer image1="../images/S3.png" image2="../images/A7.png" image3="../images/A3.png" content="Pixis Media is a seasoned editing agency, providing services at competitive pricing. Pixis Media is a seasoned editing agency, providing services at competitive pricing" />
      </div> 
      
       <div className="testimonial-section">
        <div className="testimonial-part1">
        <h1 className='heading'>Our clients love our work</h1>
        <h3 className='subheading'>See for yourself what they have to say about our work culture</h3>
        </div>

        <div className="row">
          {testinomials.map((testimonial, index) => (
            <TestinomialContainer className="column"
              key={index}
              name={testimonial.name}
              mail={testimonial.mail}
              content={testimonial.content}
              time={testimonial.time}
              date={testimonial.date}
              image={testimonial.image}
            />
          ))}
        </div>
        </div>
       
       <Lastsection image={imagePath}/>
       <Footer />  
      </>
  );
}

export default App;
