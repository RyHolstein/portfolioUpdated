
import sampleImage1 from '../../Assets/Projects/webpage.jpg'
import sampleImage2 from '../../Assets/Projects/webpage2.jpg'

//icons 
import caraviveIcon from '../../Assets/Projects/Icons/caravive.png';
import irisIcon from '../../Assets/Projects/Icons/iris.png';
import createSafeIcon from '../../Assets/Projects/Icons/csBeta.svg'
import cianMooreIcon from '../../Assets/Projects/Icons/cianmore.png'
import dexIcon from '../../Assets/Projects/Icons/famousdex.png';



//caravive 
import cvImage1 from '../../Assets/Projects/caravive/caraive.png'
import cvImage2 from '../../Assets/Projects/caravive/caravive1.png'
import cvImage3 from '../../Assets/Projects/caravive/caravive2.png'
import cvImage4 from '../../Assets/Projects/caravive/caravive3.png'


//iris 
import irisImage1 from '../../Assets/Projects/Iris/iris1.png'
import irisImage2 from '../../Assets/Projects/Iris/iris2.png'
import irisImage3 from '../../Assets/Projects/Iris/iris3.png'
// import irisImage4 from '../../Assets/Projects/Iris/iris4.png'
import irisImage5 from '../../Assets/Projects/Iris/iris5.png'



//kritiq 
import kImage1 from '../../Assets/Projects/Kritiq/kritiq1.png'
import kImage2 from '../../Assets/Projects/Kritiq/kritiq2.png'
import kImage3 from '../../Assets/Projects/Kritiq/kritiq3.png'
import kImage4 from '../../Assets/Projects/Kritiq/kritiq4.png'


//famous dex

import dexImage1 from '../../Assets/Projects/dex/dex1.png'
import dexImage2 from '../../Assets/Projects/dex/dex2.png'
import dexImage3 from '../../Assets/Projects/dex/dex3.png'


// create safe
import createSafeImg1 from '../../Assets/Projects/csbeta/1.png';

//cian moore
import cianImage1 from '../../Assets/Projects/cian/1.png'
import cianImage2 from '../../Assets/Projects/cian/2.png'
import cianImage3 from '../../Assets/Projects/cian/3.png'


//love isabella 
import loveImage1 from '../../Assets/Projects/love/1.png'
import loveImage2 from '../../Assets/Projects/love/2.png'
import loveImage3 from '../../Assets/Projects/love/3.png'

//riddle
import riddle1 from '../../Assets/Projects/riddle/1.png'
import riddle2 from '../../Assets/Projects/riddle/2.png'

const info = {
    caravive: {
        title: 'Caravive',
        description: 'This project was created in react with the api a REST Django application.  This project was created to be a survey that collects and stores information from certain customers.  An app was also in development that would allow users to create a specialized meal plan and have the meals delivered to the location of their choice. Both projects were created in React with the use of Scss and mobile first design as well as our Django REST api.',
        imgs: [cvImage1,cvImage2,cvImage3,cvImage4],
        role: 'Frontend',
        folderInfo : {
            name: 'carvive',
            icon: caraviveIcon,
            subtext: 'a custom meal order app and survey'
        }
    },
    iris: {
        title: 'Iris Digital Communities',
        description: 'Worked on the Iris Digital Community platform software to promote healthy living. Building out Angular, and React apps for displaying community information such as local events, services, and articles, as well as a variety of apps for various functions. Also has  a complete admin site with full CRUD so content team can edit add or delete information for the site.  Design were brought in from out of house Team and we created the site with their designs.',
        imgs: [irisImage1, irisImage2,irisImage3,irisImage5],
        role: 'Frontend',
        site: 'https://sandbox.iris-oc.com/dashboard/',
        folderInfo : {
            name: 'iris',
            icon: irisIcon,
            subtext: 'a platform to promote healthy living'
        }
    },
    kritiq: {
        title: 'Kritiq (WIP)',
        description: 'This site is a movie review site that allows you to review movies and see what your friend saying about movies.  I am primarily the frontend on the projects as working with other dev.  The site was created using React as well as Scss for the stylings.  TMDB api was used for the movie info, and amazons services such as Cognito, S3 Buckets, and Lamada were used for used for User authentication, storage, and the Kritiq api. This site is still very much a work in progress.',
        imgs: [kImage1, kImage2,kImage3,kImage4],
        role: 'Frontend',
        site: 'https://kritiqme.com/movies',
        folderInfo : {
            name: 'kritiq',
            subtext: 'a social movie review experience'
        }
    },
    famousDex: {
        title: 'Famous Dex',
        description: 'The Famous Dex site was a concept site created for the music artist Famous Dex.  It includes a frontend with threejs framework as well as vanilla Javascript, html and css.  Also integrated with mailChip api for email collection as well as a Concert api for upcoming venues and ticket Sales.',
        imgs: [dexImage1,dexImage2, dexImage3],
        role: 'Frontend',
        site: 'http://coreyhouck.com/dexter/z_online/',
        folderInfo : {
            name: 'famous_dex',
            icon: dexIcon,
            subtext: 'a site for Famous Dex'
        }
    },
    love: {
        title: 'Love Isabella',
        description: 'This site was created for the tripoli gallery as a way for them to raise money for hurricane relief.  The site was a silent auction for Art pieces with all the money raised going to charity.  The site was created using  just vanilla Javascript.  The site featured an admin page that allowed admins to have full CRUD control over the items.  The back was created with Node.js with express and everything was stored with Mongodb.  All Payments were processed using stripe.',
        imgs: [loveImage1, loveImage2, loveImage3],
        role: 'Fullstack',
        site: null,
        folderInfo : {
            name: 'love_isabella',
            subtext: 'a silent auction site'
        }
    },
   
    cian: {
        title: 'Cian Moore',
        description: 'This site was created as a portfolio site for the photographer Cian Moore.  It was created using vanilla Javascript. The site was created using some of his sketches as inspiration.  The site used unique features like horizontal scrolling with a neverending feed, and custom cursors for different elements on the page.',
        imgs: [cianImage1, cianImage2, cianImage3],
        role: 'FullStack',
        site: 'http://www.cianmoore.com',
        folderInfo : {
            name: 'cian_moore',
            icon: cianMooreIcon,
            subtext: 'a portfolio site'
        }
    },
    riddle: {
        title: 'Riddle Family Foundation',
        description: 'This site was created as an application site that allows users to apply for the Riddle Family Foundation Scholarship.  The Frontend was created with vanilla Javascript with the backend being created in node.js with express and MongoDb for the database.  The site also features admin panel that gives the admin full CRUD control over the applications that have been submitted.  The site also has email notification that emails the admin when an application has been submitted.',
        imgs: [riddle1, riddle2],
        role: 'Fullstack',
        folderInfo : {
            name: 'riddle_foundation',
            subtext: 'a scholarship application site'
        }
    },
    createsafe: {
        title: 'CreateSafe Beta',
        description: 'The CreateSafe beta was a Landing page concept created for the Createsafe team.  The frontend was created in Html css and javascript, while the backend was created with Node.js with express, with mongodb for capturing user information.',
        imgs: [createSafeImg1],
        role: 'FullStack',
        site: null,
        folderInfo : {
            name: 'createsafe_beta',
            icon: createSafeIcon,
            subtext: 'a landing page concept'
        }
    },
}

export default info;