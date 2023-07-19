const food = [
    {
        id: 0,
        continent:'europe',
        country:'Italy',
        group:'main courses',
        name:'Pizza',
        img: 'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=826&t=st=1689718926~exp=1689719526~hmac=b06a045718fb89a3e23471f9a34a5beeb3122b37333753577715b8506849ef6c'
    },
    {
        id: 1,
        continent:'europe',
        country:'Turkey',
        group:'Fast Food',
        name:'Kebab',
        img: 'https://img.freepik.com/premium-photo/shawarma-with-meat-vegetables-white-background-isolate-generative-ai_74760-4712.jpg?w=826'
    },
    {
        id: 2,
        continent:'europe',
        country:'Poland',
        group:'soups',
        name:'Żurek',
        img: 'https://img.freepik.com/premium-photo/zurek-traditional-polish-soup-isolated-white_123827-15579.jpg?w=1380'
    },
    {
        id: 3,
        continent:'Asia',
        country:'Japan',
        group:'soups',
        name:'Ramen',
        img: 'https://img.freepik.com/free-photo/asian-soup-chopsticks-white_23-2147762810.jpg?w=826&t=st=1689719100~exp=1689719700~hmac=a3ba5df41b1d89f113efbe8970e7fc9f3102b08b2c6fe4d0d74a8aad350628fe'
    },
    {
        id: 4,
        continent:'europe',
        country:'Spain',
        group:'main courses',
        name:'Paella',
        img: 'https://img.freepik.com/premium-photo/grilled-squid-with-corn-veggies-latin-american-food-served-white-plate-view-from_711483-529.jpg?w=826'
    },
    {
        id: 5,
        continent:'North America',
        country:'USA',
        group:'Fast Food',
        name:'Burger',
        img: 'https://img.freepik.com/premium-photo/vegan-lentils-burger-with-vegetables-light-gray-background-ai-generated_128711-7989.jpg?w=826'
    },
    {
        id: 6,
        continent:'europe',
        country:'Greec',
        group:'main courses',
        name:'Moussaka',
        img: 'https://img.freepik.com/premium-photo/plate-lasagna-with-white-background-green-leaf-top_878783-92.jpg?w=826'
    },
    {
        id: 7,
        continent:'europe',
        country:'Poland',
        group:'main courses',
        name:'Dumplings ',
        img: 'https://img.freepik.com/premium-photo/food-photography-gyoza-plate-isolated-white-background_847439-3744.jpg?w=826'
    },
    {
        id: 8,
        continent:'South America',
        country:'Wenezuela',
        group:'main courses',
        name:'Arepa',
        img: 'https://img.freepik.com/premium-photo/food-photography-tacos-plate-isolated-white-background_847439-3082.jpg?w=826'
    },
    {
        id: 9,
        continent:'South America',
        country:'Chile',
        group:'main courses',
        name:'Curanto',
        img: 'https://st3.depositphotos.com/6052770/34644/i/600/depositphotos_346442220-stock-photo-famous-traditional-dish-of-the.jpg'
    },
    {
        id: 10,
        continent:'South America',
        country:'Brasil',
        group:'main courses',
        name:'Feijoada',
        img: 'https://img.freepik.com/premium-photo/traditional-brazilian-feijoada-bowl-isolated-white-background_92534-3688.jpg?w=996'
    },
    {
        id: 11,
        continent: 'Africa',
        country: 'Ethiopia',
        group: 'main courses',
        name: 'Injera with Wot',
        img: 'https://img.freepik.com/premium-photo/high-angle-shot-person-holding-plate-ethiopian-food-with-vegetables-wooden-table_665346-28824.jpg?w=1380'
      },
      {
        id: 12,
        continent: 'Asia',
        country: 'India',
        group: 'main courses',
        name: 'Butter Chicken',
        img: 'https://img.freepik.com/free-photo/indian-butter-chicken-isolated-white-background_123827-20398.jpg?w=1380&t=st=1689767961~exp=1689768561~hmac=14b115751f9b6315fd507946e557c0afcceeb0c910db2979687d64c42086582e'
      },
      {
        id: 13,
        continent: 'South America',
        country: 'Peru',
        group: 'main courses',
        name: 'Ceviche',
        img: 'https://img.freepik.com/free-photo/shrimp-fish-sauce_1203-9137.jpg?w=740&t=st=1689719692~exp=1689720292~hmac=d2356a43c63f90fd927ce8185b70b334a3ae58ad9786e6bcb41e50e9f9e1e476'
      },
      {
        id: 14,
        continent: 'Europe',
        country: 'France',
        group: 'main courses',
        name: 'Boeuf Bourguignon',
        img: 'https://img.freepik.com/premium-photo/food-duck-leg-with-pear-currant-sauce-white-plate-delicatessen-gourmet-restaurant-menu-concept-still-life_157927-12194.jpg?w=1380'
      },
      {
        id: 15,
        continent: 'Asia',
        country: 'China',
        group: 'main courses',
        name: 'Kung Pao Chicken',
        img: 'https://img.freepik.com/free-photo/meat-with-mushrooms-vegetables_1157-15.jpg?w=1380&t=st=1689767996~exp=1689768596~hmac=2ff1bef96eda9781d0056c7eda842a5b9e4d8978b09e6ac995d1d017b73caad9'
      },
      {
        id: 16,
        continent:'europe',
        country:'Greece',
        group:'appetizers',
        name:'Tzatziki',
        img: 'https://img.freepik.com/free-photo/salad-isolated-white-background_93675-131989.jpg?w=1380&t=st=1689768027~exp=1689768627~hmac=9c3a6450a798305cc410f07aa92d5d8629fe46707a7cdfa8b0e9efc9b6342841'
    },
    {
        id: 17,
        continent:'Africa',
        country:'Morocco',
        group:'main courses',
        name:'Tagine',
        img: 'https://img.freepik.com/premium-photo/traditional-moroccan-tagine-with-couscous-isolated-white-background_857988-2572.jpg?w=1380'
    },
    {
        id: 18,
        continent:'North America',
        country:'Mexico',
        group:'main courses',
        name:'Tacos al Pastor',
        img: 'https://img.freepik.com/free-photo/traditional-mexican-tacos-with-meat-vegetables-isolated-white-background-ai-generative_123827-24862.jpg?t=st=1689719804~exp=1689723404~hmac=d03e882d43d58f99b375ed1ec9082f0d16e892d211db461e965687dff3d0253e&w=1380'
    },
    {
        id: 19,
        continent:'Europe',
        country:'France',
        group:'desserts',
        name:'Crème brûlée',
        img: 'https://img.freepik.com/premium-photo/crme-brle-isolated-white-generative-ai_910021-165.jpg?w=826'
    },
    {
        id: 20,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Fish and Chips',
        img: 'https://img.freepik.com/premium-photo/fish-chips-isolated-white-generative-ai_910021-324.jpg?w=826'
    },
    {
        id: 21,
        continent:'Asia',
        country:'Thailand',
        group:'soups',
        name:'Tom Yum Goong',
        img: 'https://img.freepik.com/free-photo/bowl-noodles-with-vegetables-eggs-with-sauce-sesame-seeds-wooden-spoon-white-backdrop_23-2148123683.jpg?w=826&t=st=1689719930~exp=1689720530~hmac=d78f44668a377fdabca1e4717d932c9e47f74e69e453af45d294593836e8e566'
    },
    {
        id: 22,
        continent:'Africa',
        country:'Nigeria',
        group:'main courses',
        name:'Jollof Rice',
        img: 'https://img.freepik.com/free-photo/view-traditional-food-frame-arrangement_23-2148723465.jpg?w=826&t=st=1689720012~exp=1689720612~hmac=fc93c856a88211082eb631acb4603e268b6b1215e4b08bd4746f58fc34f3df4a0'
    },
    {
        id: 23,
        continent:'Australia',
        country:'Australia',
        group:'desserts',
        name:'Pavlova',
        img: 'https://img.freepik.com/free-photo/pavlova-cake-with-fresh-berry-topping-layers-whipped-cream-meringue-isolated-white-backgroundai-generative_123827-24928.jpg?t=st=1689768082~exp=1689771682~hmac=8c0fb52bfe9351945d1cbe1f59208a62ea2c2694eb44d2099440da70363d4cec&w=1380'
    },
    {
        id: 24,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Meat Pie',
        img: 'https://img.freepik.com/free-photo/galette-des-rois-isolated-white-background-traditional-epiphany-cake-france_123827-19919.jpg?w=1380&t=st=1689768172~exp=1689768772~hmac=ce9df5cb239234520a4ea1af131f4875441cadf87dcd43cc975cc77ce8a18fdf'
    },
    {
        id: 25,
        continent:'Asia',
        country:'Thailand',
        group:'main courses',
        name:'Pad Thai',
        img: 'https://img.freepik.com/free-photo/fried-noodles-with-shrimp_1339-2477.jpg?w=1380&t=st=1689768204~exp=1689768804~hmac=25219e81863434549e0717e3499797f423fcbe6e1ce306e68b62b607dffd8534'
    },
    {
        id: 26,
        continent:'Africa',
        country:'Ethiopia',
        group:'main courses',
        name:'Injera',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/6f/12/d8/injera.jpg'
    },
    {
        id: 27,
        continent:'Asia',
        country:'Vietnam',
        group:'main courses',
        name:'Pho',
        img: 'https://img.freepik.com/premium-photo/food-photography-sukiyaki-black-bowl-isolated-white-background_847439-3009.jpg?w=826'
    },
    {
        id: 28,
        continent:'Europe',
        country:'Greece',
        group:'desserts',
        name:'Baklava',
        img: 'https://img.freepik.com/free-photo/tasty-turkish-delight-isolated-white_93675-130972.jpg?w=1380&t=st=1689768391~exp=1689768991~hmac=48b272fdeef9958e05f9912393d49ee13dabf925d60f53a457d3fc66f7f2ccb1'
    },
    {
        id: 29,
        continent:'Europe',
        country:'Ireland',
        group:'main courses',
        name:'Irish Stew',
        img: 'https://img.freepik.com/free-photo/soup-isolated-white-background_93675-131990.jpg?w=1380&t=st=1689768408~exp=1689769008~hmac=79ed3b2f9396e0de84bd4ea015a9aba2284e0f478daede13433d18dd312e4598'
    },
    {
    id: 30,
    continent:'South America',
    country:'Argentina',
    group:'main courses',
    name:'Asado',
    img: 'https://img.freepik.com/premium-photo/pollo-asado-con-arroz-blanco_543404-109.jpg?w=1380'
    }
]
