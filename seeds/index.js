const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '5f5c330c2cd79d538f2c66d9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672054105/Yelpcamp/daan-weijers-pSaEMIiUO84-unsplash_e6a0xg.jpg',
                    filename: 'YelpCamp/ahfnenvca4tha00h2ubt'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050325/Yelpcamp/joshua-sukoff-ylKyLmqKZLc-unsplash_ywxllw.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672051958/Yelpcamp/kevin-ianeselli-ebnlHkqfUHY-unsplash_1_udwlky.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672051955/Yelpcamp/hichem-meghachou-7I-Rj_E9ihI-unsplash_dd5hnq.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672054105/Yelpcamp/daan-weijers-pSaEMIiUO84-unsplash_e6a0xg.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050265/Yelpcamp/blake-wisz-TcgASSD5G04-unsplash_k49dmv.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672052129/Yelpcamp/todd-trapani-5LHzBpiTuzQ-unsplash_mgscg6.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672052117/Yelpcamp/tanner-moran-aOPeNWjt03k-unsplash_dvhrbn.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050229/Yelpcamp/lesly-derksen-F4fH5dAfZnE-unsplash_zuiwk4.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050205/Yelpcamp/pars-sahin-V7uP-XzqX18-unsplash_wewguo.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672052117/Yelpcamp/tanner-moran-aOPeNWjt03k-unsplash_dvhrbn.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050151/Yelpcamp/jack-sloop-qelGaL2OLyE-unsplash_jznckj.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050154/Yelpcamp/mattias-helge-CAk3Rl75CD8-unsplash_jlvsau.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672052107/Yelpcamp/peter-thomas-ATdSdo72wR8-unsplash_j3wtry.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050165/Yelpcamp/kevin-ianeselli-ebnlHkqfUHY-unsplash_lpib7u.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
                {
                    url: 'https://res.cloudinary.com/dpcduaxja/image/upload/v1672050153/Yelpcamp/jesse-gardner-wTVr4HR4SBI-unsplash_xwxruu.jpg',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
                },
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})