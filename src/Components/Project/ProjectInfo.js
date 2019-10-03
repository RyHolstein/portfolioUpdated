
import sampleImage1 from '../../Assets/Projects/webpage.jpg'
import sampleImage2 from '../../Assets/Projects/webpage2.jpg'

//icons 
import caraviveIcon from '../../Assets/Projects/Icons/caravive.png';
import irisIcon from '../../Assets/Projects/Icons/iris.png';

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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [sampleImage1,sampleImage2],
        folderInfo : {
            name: 'carvive',
            icon: caraviveIcon
        }
    },
    kritiq: {
        title: 'Kritiq (WIP)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [sampleImage1,sampleImage2],
        folderInfo : {
            name: 'kritiq'
        }
    },
    love: {
        title: 'Love Isabella',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [loveImage1, loveImage2, loveImage3],
        folderInfo : {
            name: 'love_isabella'
        }
    },
    iris: {
        title: 'Iris Digital Communities',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [],
        folderInfo : {
            name: 'iris',
            icon: irisIcon
        }
    },
    cian: {
        title: 'Cian Moore',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [cianImage1, cianImage2, cianImage3],
        folderInfo : {
            name: 'cian_moore'
        }
    },
    riddle: {
        title: 'Riddle Family Foundation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [riddle1, riddle2],
        folderInfo : {
            name: 'riddle_foundation'
        }
    },
    createsafe: {
        title: 'CreateSafe Beta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt purus. Proin lectus sapien, posuere et risus sodales, dapibus sodales turpis. Proin vel sem et metus sodales vestibulum. Nullam ex lacus, imperdiet molestie placerat sed, vulputate et ligula. Nunc sed luctus risus, at rhoncus lorem. In vitae lacus a metus gravida blandit.',
        imgs: [createSafeImg1],
        folderInfo : {
            name: 'createsafe_beta'
        }
    },
}

export default info;