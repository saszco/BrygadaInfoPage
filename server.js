import express from "express";

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"))

app.get('/', function(req, res){
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    const members = [
        { name: 'Sasha Korolchuk', img: '/img/Sasha.png', job: 'Front end developer'},
        { name: 'Dima Kumeda', img: '/img/Dima.png', job: 'Full stack developer'},
        { name: 'Egor Tsapurda', img: '/img/Egor.png', job: 'Product manager'},
        { name: 'Daria Pankova', img: '/img/Dasha.png', job: 'DBMS specialist'},
        { name: 'Maria Erlinekova', img: '/img/Masha.png', job: 'Web designer'}
    ];

    res.render('pages/about', { members });
});

app.listen(PORT, () => {
    console.log("App started on App:" + PORT);
})