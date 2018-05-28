import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Tooltip from './tooltip';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import RCTooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidHJ1ZXNhbmp1IiwiYSI6ImNqZnc1azJxNDE0dGYyd213M2M2OG0wZ2cifQ.khig4-dHariDdNBTjkx0VA';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const marks = {
    '1800': < b > 1800 < /b>,
    1850: '1850',
    1900: '1900',
    1950: '1950',
    2018: < strong > 2018 < /strong>
};

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return ( <
        RCTooltip prefixCls = "rc-slider-tooltip"
        overlay = { value } visible = { dragging } placement = "top"
        key = { index } >
        <
        Handle value = { value } { ...restProps }
        /> <
        /RCTooltip>

    );
};

class App extends Component {
    tooltipContainer;


    lists = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Gossip wolf and the fox",
                    "ATU": 4,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Carrying the Sham-Sick Trickster"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Cat and mouse in partnership",
                    "ATU": 15,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Stealing the Partner's Butter"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cock and Hen That Went to the Dovrefell",
                    "ATU": 20,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Animals Eat One Another Up"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Jean de La Fontaine",
                    "Year": "1668",
                    "Country": "France",
                    "Language": "French",
                    "Title": "Le Chien qui l‚che sa proie pour l'ombre",
                    "ATU": 34,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Wolf Dives into the Water for Reflected Cheese"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Fox as Herdsman",
                    "ATU": 37,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The fox as shepherd"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Monkey and the Fishermen",
                    "ATU": 38,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Claw in Split Tree"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The wolf and the fox",
                    "ATU": 41,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Wolf Overeats in the Cellar"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Lion, the Wolf, and the Fox",
                    "ATU": 50,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Curing a Sick Lion"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Lion, the Fox, and the Ass",
                    "ATU": 51,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Lion's share"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [46.199616, 5.152149]
                },
                "properties": {
                    "Author": "Abdulkhaliq Shikh-Osman / Maarten Janssen",
                    "Year": "2014",
                    "Country": "Somalia",
                    "Language": "English",
                    "Title": "Lion Share",
                    "ATU": 51,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Lion's share"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Vernon Jones",
                    "Year": "1912",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Fox and the Crow",
                    "ATU": 57,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Raven with a Cheese"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Fox and the Grapes",
                    "ATU": 59,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Fox and the Sour Grapes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-1.023194, 7.946527]
                },
                "properties": {
                    "Author": "unknown author",
                    "Year": "????",
                    "Country": "Ghana",
                    "Language": "English",
                    "Title": "The Spider and the Turtle",
                    "ATU": 60,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Fox and the Crane Invites Each Other"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Phaedrus / C. Smart",
                    "Year": "1887",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Fox and the Stork",
                    "ATU": 60,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Fox and the Crane Invites Each Other"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.7587, 4.0383]
                },
                "properties": {
                    "Author": "E. A. Ruskin",
                    "Year": "1921",
                    "Country": "Democratic Republic of Congo",
                    "Language": "English",
                    "Title": "The Black Monkey and the Turtoise",
                    "ATU": 60,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Fox and the Crane Invites Each Other"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Reynard And Chanticleer",
                    "ATU": 61,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Fox Persuades the Cock to Crow with Closed Eyes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Fox Who Had Lost His Tail",
                    "ATU": 64,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "Tailless Fox Tries in Vain to Get Foxes to Cut off Tails"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Hares and the Frogs",
                    "ATU": 70,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "More cowardly than the hare"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Wolf and the Crane",
                    "ATU": 76,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Wolf and the Crane"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Stag and his Reflection",
                    "ATU": 77,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Stag Admires Himself in a Spring"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Mouse, the Bird, and the Sausage",
                    "ATU": 85,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals",
                    "Specific Class": "The Mouse, the Bird, and the Sausage"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Old Sultan",
                    "ATU": 101,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The old dog rescues the child"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Marie de France",
                    "Year": "12CAD",
                    "Country": "France",
                    "Language": "Old French",
                    "Title": "Dou Goupis et de uns Chaz",
                    "ATU": 105,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The fox and the cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Jean de La Fontaine / Robert Thomson",
                    "Year": "1806",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Cat and the Fox",
                    "ATU": 105,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The fox and the cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The fox and the cat",
                    "ATU": 105,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The fox and the cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The City Mouse and the Country Mouse",
                    "ATU": 112,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Town Mouse and Country Mouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Town-mouse And The Fell-mouse",
                    "ATU": 112,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Town Mouse and Country Mouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Jackdaw and the Fox",
                    "ATU": 115,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The Hungry Fox Waits in Vain for the Horse's Lips (Scrotum) to Fall Off"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Bamse Brakar",
                    "ATU": 116,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The Bear on the Hay-Wagon"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cock, the Cuckoo, and the Blackcock",
                    "ATU": 120,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The First to See the Sunrise"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Kid and the Wolf",
                    "ATU": 122,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The Wolf Loses His Prey"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Three Billy-Goats Gruff",
                    "ATU": 122,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The Wolf Loses His Prey"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Wolf and the Seven Young Kids",
                    "ATU": 123,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "The Wolf and the Seven Young Kids"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Bremen town musicians",
                    "ATU": 130,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Outcast Animals Find a New Home"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Sheep And The Pig Who Set Up House",
                    "ATU": 130,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Outcast Animals Find a New Home"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.227512, 46.818188]
                },
                "properties": {
                    "Author": "Otto Sutermeister",
                    "Year": "????",
                    "Country": "Switzerland",
                    "Language": "English",
                    "Title": "The Robbers and the Farm Animals",
                    "ATU": 130,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Outcast Animals Find a New Home"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.435973, 55.378051]
                },
                "properties": {
                    "Author": "Alice Ecleston",
                    "Year": "1909",
                    "Country": "United Kingdom",
                    "Language": "English",
                    "Title": "The Bull, the Tup, the Cock, and the Steg",
                    "ATU": 130,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Domestic Animals",
                    "Specific Class": "Outcast Animals Find a New Home"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Wonderful Musician",
                    "ATU": 151,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Music lessons for wild animals"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Well Done and Ill Paid",
                    "ATU": 154,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "The Jackal and the Farmer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Way Of The World",
                    "ATU": 155,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Ingratitude Is the World's Reward"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The wolf and the man",
                    "ATU": 157,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Learning to Fear Men"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The sparrow and his four children",
                    "ATU": 157,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Learning to Fear Men"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Fox and the Woodcutter",
                    "ATU": 161,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Peasant Betrays Fox by Pointing"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Han far sj¯l i stua",
                    "ATU": 168,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "The musician in the wolf-trap"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Man,the Horse, the Ox and the Dog",
                    "ATU": 173,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Man and animals readjust span of life"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The duration of life",
                    "ATU": 173,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Wild Animals and Humans",
                    "Specific Class": "Man and animals readjust span of life"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Wolf and the Housedog",
                    "ATU": 201,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "The Lean Dog Prefers Liberty to Abundant Food and a Chain"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Ass and the Mule",
                    "ATU": 207,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "Rebellion of the Work Animals"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Das Lumpengesindel",
                    "ATU": 210,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "The Traveling Animals and the Wicked Man"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Herr Korbes",
                    "ATU": 210,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "The Traveling Animals and the Wicked Man"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Salt Merchant and His Ass",
                    "ATU": 211,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "The hog who was so tired of his daily food"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Ass in the Lion's Skin",
                    "ATU": 214,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "Ass Tries to caress his Master like a Dog"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Ass and the Lapdog",
                    "ATU": 214,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Domestic Animals",
                    "Specific Class": "Ass Tries to caress his Master like a Dog"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der Zaunkˆnig",
                    "ATU": 221,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Election of Bird-King"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Bat and the Weasels",
                    "ATU": 222,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Willow-Wren and the Bear"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Jacob and Wilhelm Grimm",
                    "Year": "1909",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Willow-Wren and the Bear",
                    "ATU": 222,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Willow-Wren and the Bear"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Tortoise and the Eagle",
                    "ATU": 225,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Tortoise That Wanted to Fly"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Farmer and the Stork",
                    "ATU": 233,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "One's Own Children Are Always Prettiest",
                    "ATU": 247,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "Every Mother Thinks Her Child Is the Most Beautiful"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Dog and the Sparrow",
                    "ATU": 248,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Dog and the Sparrow"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Fisherman and His Nets",
                    "ATU": 253,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Fish in the Net"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Turtoise and the Hare",
                    "ATU": 275,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Race of the Fox and the Crayfish"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "Jupiter and the Frogs",
                    "ATU": 277,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Mouse, the Frog, and the Hawk",
                    "ATU": 278,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "Rat and Frog Tie Paws Together"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Ants and the Grasshopper",
                    "ATU": 280,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Ant Carries a Load as Large as Himself"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Ass and the Grasshopper",
                    "ATU": 292,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "Ass Tries to Get a Cricket's Voice"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Belly and the Members",
                    "ATU": 293,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "Debate of the Belly and the Members"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Straw, coal, and bean",
                    "ATU": 295,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "The Straw, the Coal, and the Bean"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The North Wind and the Sun",
                    "ATU": 298,
                    "Main Class": "Animal Tales",
                    "Branch Class": "Other Animals and Objects",
                    "Specific Class": "Wind and sun"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.469936, 50.503887]
                },
                "properties": {
                    "Author": "unknown author",
                    "Year": "13CAD",
                    "Country": "Belgium",
                    "Language": "Middle Dutch",
                    "Title": "Lanceloet en het hert met de witte voet",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "R¯drev og Askeladden",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "A Bicha de Sete  CabeÁas",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "Greuceanu",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "<U+021A>ugulea, fiul unchia<U+0219>ului <U+0219>i al matu<U+0219>ei",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [25.013607, 58.595272]
                },
                "properties": {
                    "Author": "Oskar Kallas",
                    "Year": "1900",
                    "Country": "Estonia",
                    "Language": "Estonian",
                    "Title": "Kivikuninga kaitsealune",
                    "ATU": 300,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Dragon-Slayer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Big Bird Dan",
                    "ATU": 301,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Three Kidnapped Princesses"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Joan de l' os",
                    "ATU": 301,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Three Kidnapped Princesses"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "La perera",
                    "ATU": 301,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Three Kidnapped Princesses"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [25.013607, 58.595272]
                },
                "properties": {
                    "Author": "Oskar Kallas",
                    "Year": "1900",
                    "Country": "Estonia",
                    "Language": "Estonian",
                    "Title": "Herrne-h¸‰mees, tammek‰‰‰ndj‰ ja m‰ekapataja",
                    "ATU": 301,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Three Kidnapped Princesses"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The crystal ball",
                    "ATU": 302,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Giant Without A Heart,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Giant Who Had No Heart in His Body",
                    "ATU": 302,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Giant Without A Heart,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Gutten som gjorde seg til l¯ve, falk og maur",
                    "ATU": 302,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Giant Without A Heart,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Peppi, spersu pri lu munnu",
                    "ATU": 302,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Giant Without A Heart,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Merchant",
                    "ATU": 303,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Twin Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Enchanted Doe",
                    "ATU": 303,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Twin Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Trolls In Hedale Wood",
                    "ATU": 303,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Twin Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Shortshanks",
                    "ATU": 303,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Twin Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The skilful huntsman",
                    "ATU": 304,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Trained Hunter"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The shoes that were danced to pieces",
                    "ATU": 306,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Twelve Dancing Princesses"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Parsley",
                    "ATU": 310,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rapunzel"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Dove",
                    "ATU": 310,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rapunzel"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Rapunzel",
                    "ATU": 310,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rapunzel"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La vecchia di l'ortu",
                    "ATU": 310,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rapunzel"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Fitchers Vogel",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "H‰sichenbraut",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Old Rinkrank",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Old Dame and Her Hen",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Wentworth Webster",
                    "Year": "????",
                    "Country": "Spain",
                    "Language": "English",
                    "Title": "The Cobbler and His Three Daughters",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "O Colhereiro",
                    "ATU": 311,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Rescue by the Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "Blue Beard",
                    "ATU": 312,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Bluebeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Blaubart",
                    "ATU": 312,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Bluebeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË / Thomas Frederick Crane",
                    "Year": "1885",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Don Firriulieddu",
                    "ATU": 312,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Bluebeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die Wassernixe",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.318756, 61.52401]
                },
                "properties": {
                    "Author": "Alexander Afanasyev",
                    "Year": "????",
                    "Country": "Russia",
                    "Language": "English",
                    "Title": "Baba Yaga",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu Re di Spagna",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Lo castell del sol",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Blancaflor",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Fern·n Caballero",
                    "Year": "1877",
                    "Country": "Spain",
                    "Language": "Spanish",
                    "Title": "Una promesa",
                    "ATU": 313,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magic Flight"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Widow's Son",
                    "ATU": 314,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Golden-Haired"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The nix of the mill-pond",
                    "ATU": 316,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Mermaid in the Pond"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The thief and his master",
                    "ATU": 325,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magician and his Apprentice,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Farmer Weathersky",
                    "ATU": 325,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Magician and his Apprentice,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Story of the Youth who Went Forth to Learn What Fear Was",
                    "ATU": 326,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Youth Who Wanted to Learn What Fear Is"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile / John Edward Taylor",
                    "Year": "1848",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Nennillo and Nennella",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "Little Thumb",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Madame d'Aulnoy",
                    "Year": "1697",
                    "Country": "France",
                    "Language": "French",
                    "Title": "Finette Cendron",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Hansel and Gretel",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Buttercup",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Boots and the Troll",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [15.472962, 49.817492]
                },
                "properties": {
                    "Author": "Boûena Nemcov·",
                    "Year": "1845",
                    "Country": "Czech Republic",
                    "Language": "Czech",
                    "Title": "Poh·dka o pernÌkovÈ chaloupce",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.435973, 55.378051]
                },
                "properties": {
                    "Author": "Hector MacLean",
                    "Year": "????",
                    "Country": "United Kingdom",
                    "Language": "English",
                    "Title": "Maol a chliobain",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cavaddu 'nfatatu",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cuntu di 'na Riggina",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Emilian Hubac",
                    "Year": "1874",
                    "Country": "France",
                    "Language": "Occitan",
                    "Title": "La Mairastra",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Fern·n Caballero",
                    "Year": "1877",
                    "Country": "Spain",
                    "Language": "Spanish",
                    "Title": "El zurrÛn que cantaba",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "Os Meninos Perdidos",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "Jo„o Pequenito",
                    "ATU": 327,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Children and the Ogre"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Corvetto",
                    "ATU": 328,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Treasures of the Giant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cavaddu 'nfatatu",
                    "ATU": 328,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Treasures of the Giant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cuntu di 'na Riggina",
                    "ATU": 328,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Treasures of the Giant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The sea-hare",
                    "ATU": 329,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Miss the Magic Mirror"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Master-Smith",
                    "ATU": 330,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Smith Outwits the Devil"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The spirit in the glass bottle",
                    "ATU": 331,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Spirit in the Bottle"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The godfather",
                    "ATU": 332,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Godfather Death"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Godfather Death",
                    "ATU": 332,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Godfather Death"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Gutten med ¯ldunken",
                    "ATU": 332,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Godfather Death"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "Comadre Morte",
                    "ATU": 332,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Godfather Death"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "Little Red Riding Hood",
                    "ATU": 333,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Little Red Riding Hood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die drei Handwerksburschen",
                    "ATU": 360,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "The Three Apprentices and the Devil"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Bearskin",
                    "ATU": 361,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Adverseries",
                    "Specific Class": "Bearskin"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The drummer",
                    "ATU": 400,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Quest for a Lost Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Soria Moria Castle",
                    "ATU": 400,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Quest for a Lost Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Three Princesses of Whiteland",
                    "ATU": 400,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Quest for a Lost Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Peppi, spersu pri lu munnu",
                    "ATU": 400,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Quest for a Lost Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [19.503304, 47.162494]
                },
                "properties": {
                    "Author": "Benedek Elek",
                    "Year": "1894",
                    "Country": "Hungary",
                    "Language": "Hungarian",
                    "Title": "T¸ndÈr erzsÈbet",
                    "ATU": 400,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Quest for a Lost Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The raven",
                    "ATU": 401,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Princess Transformed into a Deer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "Voinicul cel cu cartea Ón m‚na nascut",
                    "ATU": 401,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Princess Transformed into a Deer"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three feathers",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der arme M¸llerbursch und das K‰tzchen",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Doll i' the Grass",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Gutten som ville fri til datter til mor i kroken",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.318756, 61.52401]
                },
                "properties": {
                    "Author": "Alexander Afanasyev",
                    "Year": "????",
                    "Country": "Russia",
                    "Language": "English",
                    "Title": "The Princess Frog",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "Broasca <U+021B>estoasa cea fermecata",
                    "ATU": 402,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Animal Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Lo Tre Fate",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Two Cakes",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The white bride and the black one",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Bushy Bride",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La figghia di Biancuciuri",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Ciciruni",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "Cele trei rodii aurite",
                    "ATU": 403,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The White and the Black Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Jorinda and Joringel",
                    "ATU": 405,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Jorinde and Joringel"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "A riddling tale",
                    "ATU": 407,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Flower Girl"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Rosamarina",
                    "ATU": 407,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Flower Girl"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Three Citrons",
                    "ATU": 408,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Three Lemons"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Three Lemons",
                    "ATU": 408,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Three Lemons"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Las tres taronjas del amor",
                    "ATU": 408,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Three Lemons"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Sun, Moon, and Talia",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile / Richard Burton",
                    "Year": "1893",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Young Slave",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / A. E. Johnson",
                    "Year": "????",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Sleeping Beauty in the Wood",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Sleeping Beauty (Little Briar Rose)",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The glass coffin",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Suli, Perna e Anna",
                    "ATU": 410,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Sleeping Beauty"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Catenaccio",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Pintosmalto",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Golden Root",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The iron stove",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "East o' the Sun and West o' the Moon",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Mandruni e Mandruna",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu Re d'AnÏmmulu",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Rusina 'Mperatrici",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu surciteddu cu la cuda fitusa",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu 'Mperaturi Scursuni",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Consiglieri Pedroso / Henrietta Monteiro",
                    "Year": "1882",
                    "Country": "Portugal",
                    "Language": "English",
                    "Title": "The Maiden and the Beast",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "O PrÌncipe Sapo",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "Bela-Menina",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Paul SÈbillot",
                    "Year": "1883",
                    "Country": "France",
                    "Language": "French",
                    "Title": "Les petites CoudÈes",
                    "ATU": 425,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Search for the Lost Husband"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Snow-White and Rose-Red",
                    "ATU": 426,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Snow White and Rose Red"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The donkey",
                    "ATU": 430,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Prince Donkey"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Das Waldhaus",
                    "ATU": 431,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Waldhaus"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Verde Prato",
                    "ATU": 432,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Bird Lover"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Madame d'Aulnoy / Andrew Lang",
                    "Year": "1892",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Blue Bird",
                    "ATU": 432,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Bird Lover"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Li palli magichi",
                    "ATU": 432,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Bird Lover"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "O PrÌncipe Sapo",
                    "ATU": 433,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Frog-King, or Iron Henry",
                    "ATU": 440,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Frog King"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Hans my Hedgehog",
                    "ATU": 441,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "In Enchanted Skin"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The old woman in the wood",
                    "ATU": 442,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Old Woman in the Wood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile / John Edward Taylor",
                    "Year": "1848",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Nennillo and Nennella",
                    "ATU": 450,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Brother and Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Br¸derchen und Schwesterchen",
                    "ATU": 450,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Brother and Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Das L‰mmchen und Fischchen",
                    "ATU": 450,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Brother and Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La figghia di Biancuciuri",
                    "ATU": 450,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Brother and Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Burdilluni",
                    "ATU": 450,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "Brother and Sister"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Seven Doves",
                    "ATU": 451,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Nurse looking for her Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The twelve brothers",
                    "ATU": 451,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Nurse looking for her Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The seven ravens",
                    "ATU": 451,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Nurse looking for her Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The six swans",
                    "ATU": 451,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Nurse looking for her Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Twelve Wild Ducks",
                    "ATU": 451,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Enchanted Wife/Husband or other relative",
                    "Specific Class": "The Nurse looking for her Brothers,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The devil with the three golden hairs",
                    "ATU": 461,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "Three Hairs of the Devil"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Rich Peter the Pedlar",
                    "ATU": 461,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "Three Hairs of the Devil"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Dragon",
                    "ATU": 463,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Witch in the Stone Boat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-19.020835, 64.963051]
                },
                "properties": {
                    "Author": "JÛn ¡rnason / Andrew Lang",
                    "Year": "1894",
                    "Country": "Iceland",
                    "Language": "English",
                    "Title": "The Witch in the Stone Boat",
                    "ATU": 463,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Witch in the Stone Boat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Dammi lu velu!",
                    "ATU": 465,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "Man persecuted for his beautiful wife"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Friends In Life And Death",
                    "ATU": 470,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "Friends in Life and Death"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Seven Foals",
                    "ATU": 471,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Bridge to Another World"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / A.E. Johnson",
                    "Year": "????",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Fairies",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die drei M‰nnlein im Walde",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Mother Hulda",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der heilige Joseph im Walde",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Two Step-Sisters",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Gr‡ttula-bedd‡ttula",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La figghia di Biancuciuri",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Li dui Soru",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La Mammadr‡a",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "La fillastra",
                    "ATU": 480,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Tasks",
                    "Specific Class": "The Kind and the Unkind Girls"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-56.027783, 3.919305]
                },
                "properties": {
                    "Author": "Maarten Janssen",
                    "Year": "2014",
                    "Country": "Suriname",
                    "Language": "English",
                    "Title": "Anansi in hunger",
                    "ATU": 500,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Rumpelstiltskin"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Rumpelstiltskin",
                    "ATU": 500,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Rumpelstiltskin"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Sevens Bits of Bacon-Rind",
                    "ATU": 501,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Three Spinners"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die drei Spinnerinnen",
                    "ATU": 501,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Three Spinners"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Three Aunts",
                    "ATU": 501,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Three Spinners"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Iron John",
                    "ATU": 502,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Wild Man"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [25.013607, 58.595272]
                },
                "properties": {
                    "Author": "Oskar Kallas",
                    "Year": "1900",
                    "Country": "Estonia",
                    "Language": "Estonian",
                    "Title": "Kivikuninga kaitsealune",
                    "ATU": 502,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Wild Man"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die Geschenke des kleinen Volkes",
                    "ATU": 503,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Helpful Elves"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Krambugutten med gammelostlasten",
                    "ATU": 506,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Rescued Princess"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Companion",
                    "ATU": 507,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Mistress of the Monster"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Cenerentola",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The She-Bear",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "Cinderella; or, The Little Glass Slipper",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Madame d'Aulnoy",
                    "Year": "1697",
                    "Country": "France",
                    "Language": "French",
                    "Title": "Finette Cendron",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "All-kinds-of-fur",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The true bride",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Katie Woodencloak",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [15.472962, 49.817492]
                },
                "properties": {
                    "Author": "Boûena Nemcov·",
                    "Year": "1845",
                    "Country": "Czech Republic",
                    "Language": "Czech",
                    "Title": "O Popelce",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.318756, 61.52401]
                },
                "properties": {
                    "Author": "Alexander Afanasyev",
                    "Year": "????",
                    "Country": "Russia",
                    "Language": "English",
                    "Title": "Baba Yaga",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La picuredda",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Gr‡ttula-bedd‡ttula",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Pilusedda",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "????",
                    "Country": "Spain",
                    "Language": "English",
                    "Title": "The Fire-blower",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Consiglieri Pedroso / Henriqueta Monteiro",
                    "Year": "1882",
                    "Country": "Portugal",
                    "Language": "English",
                    "Title": "The Hearth-Cat",
                    "ATU": 510,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Cinderella and Cap o' Rushes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "One-eye, two-eyes, and three-eyes",
                    "ATU": 511,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "One-Eye, Two-Eyes, and Three-Eyes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Flea",
                    "ATU": 513,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Extraordinary Companions"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Booby",
                    "ATU": 513,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Extraordinary Companions"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Six soldiers of fortune",
                    "ATU": 513,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Extraordinary Companions"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The six servants",
                    "ATU": 513,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Extraordinary Companions"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Boots And His Crew",
                    "ATU": 513,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Extraordinary Companions"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "A Afilhada de Santo AntÛnio",
                    "ATU": 514,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Shift of Sex"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Raven",
                    "ATU": 516,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Petrified Friend"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Faithful John",
                    "ATU": 516,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Petrified Friend"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Princess on the Glass Hill",
                    "ATU": 530,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Glass Mountain"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Madame d'Aulnoy / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Story of Pretty Goldilocks",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Ferdinand the faithful",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Golden Palace That Hung In The Air",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Dapplegrim",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cavaddu 'nfatatu",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cuntu di 'na Riggina",
                    "ATU": 531,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Faithful Ferdinand"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The goose girl",
                    "ATU": 533,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Repressed Bride"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Pippo",
                    "ATU": 545,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Cat as Helper"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / Andrew Lang",
                    "Year": "1889",
                    "Country": "France",
                    "Language": "English",
                    "Title": "The Master Cat; or, Puss in Boots",
                    "ATU": 545,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Cat as Helper"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Lord Peter",
                    "ATU": 545,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Cat as Helper"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Don Giuseppi Piru",
                    "ATU": 545,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Cat as Helper"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.96676, 45.943161]
                },
                "properties": {
                    "Author": "Petre Ispirescu",
                    "Year": "1882",
                    "Country": "Romania",
                    "Language": "Romanian",
                    "Title": "Coto<U+0219>man nazdravanu",
                    "ATU": 545,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Cat as Helper"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The golden bird",
                    "ATU": 550,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Golden Bird"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Golden Bird",
                    "ATU": 550,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Golden Bird"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The water of life",
                    "ATU": 551,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Water of Life"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Three Enchanted Princes",
                    "ATU": 552,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Animals and In-laws"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.005859, 44.016521]
                },
                "properties": {
                    "Author": "Vuk Stefanovic Karadûic / Elodie L. Muatovich",
                    "Year": "1918",
                    "Country": "Serbia",
                    "Language": "English",
                    "Title": "Bash-Chalek; Or, True Steel",
                    "ATU": 552,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Animals and In-laws"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Li tri figghi obbidienti",
                    "ATU": 552,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "Animals and In-laws"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The queen bee",
                    "ATU": 554,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Grateful Animals"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The fisherman and his wife",
                    "ATU": 555,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Fisherman and his Wife,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The gold-children",
                    "ATU": 555,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Fisherman and his Wife,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.318756, 61.52401]
                },
                "properties": {
                    "Author": "Aleksandr Pushkin / Avril Pyman",
                    "Year": "????",
                    "Country": "Russia",
                    "Language": "English",
                    "Title": "Tale of the fisherman and the little fish",
                    "ATU": 555,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Fisherman and his Wife,"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Lo Scarafone, lo Sorece e lo Grillo",
                    "ATU": 559,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Helpers",
                    "Specific Class": "The Princess’ Laugh"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Stone in the Cock's Head",
                    "ATU": 560,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Ring"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Three Years Without Wages",
                    "ATU": 560,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Ring"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The blue light",
                    "ATU": 562,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Spirit in the Blue Light"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.501785, 56.26392]
                },
                "properties": {
                    "Author": "H.C. Andersen / H. P. Paull",
                    "Year": "1872",
                    "Country": "Denmark",
                    "Language": "English",
                    "Title": "The tinder-box",
                    "ATU": 562,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Spirit in the Blue Light"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Lo cunto de l'uerco",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Wishing-Table, the Gold-Ass, and the Cudgel in the Sack",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Lad Who Went to the North Wind",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu scarpareddu mortu di fami",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La Munachedda",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "A Cacheirinha",
                    "ATU": 563,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Three Magic Gifts"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Months",
                    "ATU": 564,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Two Marvelous Pitchers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Sweet Porridge",
                    "ATU": 565,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Mill"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Why the Sea Is Salt",
                    "ATU": 565,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Mill"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Petru lu Massariotu",
                    "ATU": 566,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Fortunatus"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Peppi, spersu pri lu munnu",
                    "ATU": 566,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Fortunatus"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La vurza, lu firriolu e lu cornu 'nfatatu",
                    "ATU": 566,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Fortunatus"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La 'Mperatrici Trebisonna",
                    "ATU": 566,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Fortunatus"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The two brothers",
                    "ATU": 567,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Bird Heart"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Donkey cabbages",
                    "ATU": 567,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Magic Bird Heart"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The knapsack, the hat, and the horn",
                    "ATU": 569,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Knapsack, the Hat, and the Horn"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Osborn's Pipe",
                    "ATU": 570,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Bunnies Beware of the King"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "La Papara",
                    "ATU": 571,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Golden Goose"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The golden goose",
                    "ATU": 571,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Golden Goose"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Tyrihans som fikk kongsdatteren til Â le",
                    "ATU": 571,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Golden Goose"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Boots and His Brothers",
                    "ATU": 577,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Order of the King"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Spindel, Weberschiffchen und Nadel",
                    "ATU": 585,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "Spindle, Shuttle, and Needle"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der Kˆnigssohn, der sich vor nichts f¸rchtet",
                    "ATU": 590,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Prince and the Bracelets"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Blue Belt",
                    "ATU": 590,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Prince and the Bracelets"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der Jude im Dorn",
                    "ATU": 592,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Dance Among Thorns"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Little Freddy With His Fiddle",
                    "ATU": 592,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Dance Among Thorns"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The griffin",
                    "ATU": 610,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Healing Fruit"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Master Tobacco",
                    "ATU": 611,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "True Love"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three snake-leaves",
                    "ATU": 612,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Three Snake-Leaves"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Li Dui Fratielle",
                    "ATU": 613,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Two Travelers: Truth and Falsehood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The two travellers",
                    "ATU": 613,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Two Travelers: Truth and Falsehood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "True and Untrue",
                    "ATU": 613,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Two Travelers: Truth and Falsehood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "Mais vale quem Deus ajuda, que quem muito madruga",
                    "ATU": 613,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Magic Objects",
                    "Specific Class": "The Two Travelers: Truth and Falsehood"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The young giant",
                    "ATU": 650,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "Strong John"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "????",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Rumble-Mumble Goose-Egg",
                    "ATU": 650,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "Strong John"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile / John Edward Taylor",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Myrtle",
                    "ATU": 652,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Boy Whose Wishes Always Come True"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die Nelke",
                    "ATU": 652,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Boy Whose Wishes Always Come True"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "Li Cinco Figlie",
                    "ATU": 653,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Skillful Brothers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The four skilful brothers",
                    "ATU": 653,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Skillful Brothers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three brothers",
                    "ATU": 654,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Three Brothers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die drei Feldscherer",
                    "ATU": 660,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Three Doctors "
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three languages",
                    "ATU": 671,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Three Languages"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The white snake",
                    "ATU": 673,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The White Snake"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Peruonto",
                    "ATU": 675,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "The Wish-Fish"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Simeli mountain",
                    "ATU": 676,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Supernatural Power or Knowledge",
                    "Specific Class": "Open Sesame!"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Daumesdick",
                    "ATU": 700,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Tom Thumb"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Daumerlings Wanderschaft",
                    "ATU": 700,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Tom Thumb"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Thumbikin",
                    "ATU": 700,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Tom Thumb"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.24389, 53.41291]
                },
                "properties": {
                    "Author": "Amhlaoibh ” Loingsigh",
                    "Year": "1966",
                    "Country": "Ireland",
                    "Language": "Irish",
                    "Title": "An Gars˙n gur Dhein GaiscÌoch de",
                    "ATU": 700,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Tom Thumb"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.501785, 56.26392]
                },
                "properties": {
                    "Author": "H.C. Andersen / H. P. Paull",
                    "Year": "1872",
                    "Country": "Denmark",
                    "Language": "English",
                    "Title": "The princess and the pea",
                    "ATU": 704,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Princess and the Pea"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "1634",
                    "Country": "Italy",
                    "Language": "Neapolitan",
                    "Title": "La Penta Mano-Mozza",
                    "ATU": 706,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Girl Without Hands"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The girl without hands",
                    "ATU": 706,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Girl Without Hands"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu Tradimentu",
                    "ATU": 706,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Girl Without Hands"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three little birds",
                    "ATU": 707,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Bird of Truth"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË / Thomas Frederick Crane",
                    "Year": "1885",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The dancing water, the singing apple, and the speaking bird",
                    "ATU": 707,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Bird of Truth"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Lo castell de ir·s y no hi veur·s",
                    "ATU": 707,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Bird of Truth"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Fern·n Caballero / Andrew Lang",
                    "Year": "1906",
                    "Country": "Spain",
                    "Language": "English",
                    "Title": "The Bird of Truth",
                    "ATU": 707,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Bird of Truth"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile / Richard Burton",
                    "Year": "1893",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Young Slave",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Little Snow White",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.318756, 61.52401]
                },
                "properties": {
                    "Author": "Aleksandr Pushkin",
                    "Year": "????",
                    "Country": "Russia",
                    "Language": "English",
                    "Title": "Tale of the dead princessand the seven knights",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË / Thomas Frederick Crane",
                    "Year": "1885",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "The Stepmother",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La 'Nfanti Margarita",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho / Maarten Janssen",
                    "Year": "2014",
                    "Country": "Portugal",
                    "Language": "English",
                    "Title": "The Enchanted Shoes",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Consiglieri Pedroso",
                    "Year": "1910",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "A rainha orgulhosa",
                    "ATU": 709,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Snow White"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giambattista Basile",
                    "Year": "????",
                    "Country": "Italy",
                    "Language": "English",
                    "Title": "Goat-Face",
                    "ATU": 710,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Black Madonna"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Our Lady's Child",
                    "ATU": 710,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Black Madonna"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Lassie and Her Godmother",
                    "ATU": 710,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Black Madonna"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Charles Perrault / A.E. Johnson",
                    "Year": "????",
                    "Country": "France",
                    "Language": "English",
                    "Title": "Ricky of the Tuft",
                    "ATU": 711,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Twin Sisters"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Tatterhood",
                    "ATU": 711,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Twin Sisters"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.224454, 39.399872]
                },
                "properties": {
                    "Author": "Adolfo Coelho",
                    "Year": "1879",
                    "Country": "Portugal",
                    "Language": "Portuguese",
                    "Title": "O Pinto Borrachudo",
                    "ATU": 715,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "Demi-coq"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The almond tree",
                    "ATU": 720,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "From the Juniper Tree"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Father Of The Family",
                    "ATU": 726,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Oldest on the Farm"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "Mercury and the Workmen",
                    "ATU": 729,
                    "Main Class": "Tales of Magic",
                    "Branch Class": "Other Tales of the Supernatural",
                    "Specific Class": "The Axe Falls into the Stream"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Fern·n Caballero",
                    "Year": "1877",
                    "Country": "Spain",
                    "Language": "Spanish",
                    "Title": "El pan",
                    "ATU": 750,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Gertrude's Bird",
                    "ATU": 751,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The old man made young again",
                    "ATU": 753,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "Christ and the smith"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die zwˆlf Apostel",
                    "ATU": 766,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "The seven sleepers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die himmlische Hochzeit",
                    "ATU": 767,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "Food for the Crucifix"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der gestohlene Heller",
                    "ATU": 769,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "A Child Returns from the Dead"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Das eigensinnige Kind",
                    "ATU": 779,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "Divine rewards and punishments"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die Sterntaler",
                    "ATU": 779,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "Divine rewards and punishments"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die Korn‰hre",
                    "ATU": 779,
                    "Main Class": "Religious Tales",
                    "Branch Class": "God Rewards and Punishes",
                    "Specific Class": "Divine rewards and punishments"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The singing bone",
                    "ATU": 780,
                    "Main Class": "Religious Tales",
                    "Branch Class": "The Truth Comes to Light",
                    "Specific Class": "The Singing Bone"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "La flor del penical",
                    "ATU": 780,
                    "Main Class": "Religious Tales",
                    "Branch Class": "The Truth Comes to Light",
                    "Specific Class": "The Singing Bone"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Fern·n Caballero / Amanda Cibulka",
                    "Year": "2017",
                    "Country": "Spain",
                    "Language": "English",
                    "Title": "The Blue Lily",
                    "ATU": 780,
                    "Main Class": "Religious Tales",
                    "Branch Class": "The Truth Comes to Light",
                    "Specific Class": "The Singing Bone"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The tailor in heaven",
                    "ATU": 800,
                    "Main Class": "Religious Tales",
                    "Branch Class": "Heaven",
                    "Specific Class": "The Tailor in Heaven"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Meister Pfriem",
                    "ATU": 801,
                    "Main Class": "Religious Tales",
                    "Branch Class": "Heaven",
                    "Specific Class": "Master Pfriem"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The peasant in heaven",
                    "ATU": 802,
                    "Main Class": "Religious Tales",
                    "Branch Class": "Heaven",
                    "Specific Class": "The Peasant in Heaven"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The king of the golden mountain",
                    "ATU": 810,
                    "Main Class": "Religious Tales",
                    "Branch Class": "The Devil",
                    "Specific Class": "The devil loses a soul that was promised him"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / Laura Gibbs",
                    "Year": "2002",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Man,the Horse, the Ox and the Dog",
                    "ATU": 828,
                    "Main Class": "Religious Tales",
                    "Branch Class": "Other Religious Tales",
                    "Specific Class": "Men, Animals, and the Span of Life"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Thief and His Mother",
                    "ATU": 838,
                    "Main Class": "Religious Tales",
                    "Branch Class": "Other Religious Tales",
                    "Specific Class": "The Bad Rearing"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The riddle",
                    "ATU": 851,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Man Marries the Princess",
                    "Specific Class": "The Riddle of the Suitor"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Boots Who Made the Princess Say, That's A Story",
                    "ATU": 852,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Man Marries the Princess",
                    "Specific Class": "That is a lie!"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Maid Maleen",
                    "ATU": 870,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Woman Marries the Prince",
                    "Specific Class": "The Princess in the Underground Cave"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Little Annie the Goose-Girl",
                    "ATU": 870,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Woman Marries the Prince",
                    "Specific Class": "The Princess in the Underground Cave"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die kluge Bauerntochter",
                    "ATU": 875,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Woman Marries the Prince",
                    "Specific Class": "The Clever Peasant girl"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Ikke kj¯rende og ikke ridende",
                    "ATU": 875,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Woman Marries the Prince",
                    "Specific Class": "The Clever Peasant girl"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The twelve huntsmen",
                    "ATU": 884,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Proofs of Fidelity and Innocence",
                    "Specific Class": "The forgotten fiancée"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Rusina 'Mperatrici",
                    "ATU": 884,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Proofs of Fidelity and Innocence",
                    "Specific Class": "The forgotten fiancée"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "King Thrushbeard",
                    "ATU": 900,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Obstinate Wife Learns to Obey",
                    "Specific Class": "King Thrushbeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Hacon Grizzlebeard",
                    "ATU": 900,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Obstinate Wife Learns to Obey",
                    "Specific Class": "King Thrushbeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "La Rigginotta sghinfignusa",
                    "ATU": 900,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Obstinate Wife Learns to Obey",
                    "Specific Class": "King Thrushbeard"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Taming the Shrew",
                    "ATU": 901,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "The Obstinate Wife Learns to Obey",
                    "Specific Class": "Taming of the Shrew"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Das Hirtenb¸blein",
                    "ATU": 922,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Clever Acts and Words",
                    "Specific Class": "The king and the abbot"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Priest And The Clerk",
                    "ATU": 922,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Clever Acts and Words",
                    "Specific Class": "The king and the abbot"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The goose-girl at the well",
                    "ATU": 923,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Clever Acts and Words",
                    "Specific Class": "Loving the Salt"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Los fustots",
                    "ATU": 923,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Clever Acts and Words",
                    "Specific Class": "Loving the Salt"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [19.699024, 48.669026]
                },
                "properties": {
                    "Author": "Doböinsk˝ Pavol",
                    "Year": "1880",
                    "Country": "Slovakia",
                    "Language": "Slovak",
                    "Title": "Sol nad zlato",
                    "ATU": 923,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Clever Acts and Words",
                    "Specific Class": "Loving the Salt"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The King's Son and the Painted Lion",
                    "ATU": 934,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Tales of Fate",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The boots of buffalo-leather",
                    "ATU": 952,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Robbers and Murderers",
                    "Specific Class": "The King and the Soldier"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The robber bridegroom",
                    "ATU": 955,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Robbers and Murderers",
                    "Specific Class": "The Robber Bridegroom"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Sweetheart In The Wood",
                    "ATU": 955,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Robbers and Murderers",
                    "Specific Class": "The Robber Bridegroom"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die klare Sonne bringts an den Tag",
                    "ATU": 960,
                    "Main Class": "Realistic Tales",
                    "Branch Class": "Robbers and Murderers",
                    "Specific Class": "The Sun Brings All to Light"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Boots Who Ate a Match With the Troll",
                    "ATU": 1000,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Labor Contract",
                    "Specific Class": "Bargain not to become angry"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The peasant and the devil",
                    "ATU": 1030,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Partnership between Man and Ogre",
                    "Specific Class": "Man and ogre share the harvest"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The giant and the tailor",
                    "ATU": 1049,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Partnership between Man and Ogre",
                    "Specific Class": "The heavy axe"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Roland",
                    "ATU": 1119,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Man kills(injures) Ogre",
                    "Specific Class": "Ogres Kill Their Own Children"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cavaddu 'nfatatu",
                    "ATU": 1119,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Man kills(injures) Ogre",
                    "Specific Class": "Ogres Kill Their Own Children"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.56738, 41.87194]
                },
                "properties": {
                    "Author": "Giuseppe PitrË",
                    "Year": "1870",
                    "Country": "Italy",
                    "Language": "Sicilian",
                    "Title": "Lu cuntu di 'na Riggina",
                    "ATU": 1119,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Man kills(injures) Ogre",
                    "Specific Class": "Ogres Kill Their Own Children"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Lad and the Deil",
                    "ATU": 1158,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Man outwills the devil",
                    "Specific Class": "The ogre wants to look through the gun barrel in the smithy"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cat on the Dovrefell",
                    "ATU": 1161,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Man outwills the devil",
                    "Specific Class": "The Bear Trainer and His Cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Skipper And Old Nick",
                    "ATU": 1179,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Souls saved from the devil",
                    "Specific Class": "The ogre on the ship"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Fanden og futen",
                    "ATU": 1186,
                    "Main Class": "Tales of stupid Ogres(Giant, Devil)",
                    "Branch Class": "Souls saved from the devil",
                    "Specific Class": "With his whole heart"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.213749, 46.227638]
                },
                "properties": {
                    "Author": "Jean de La Fontaine",
                    "Year": "1668",
                    "Country": "France",
                    "Language": "French",
                    "Title": "Le Meunier, son Fils, et l'Ane",
                    "ATU": 1215,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "The Man, the Boy, and the Donkey"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The owl",
                    "ATU": 1281,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "Burning the Barn to Destroy an Unknown Animal"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Der Hahnenbalken",
                    "ATU": 1290,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "Swimming in the Flax-field"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Miser",
                    "ATU": 1305,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "0"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [5.291266, 52.132633]
                },
                "properties": {
                    "Author": "G.J. Boekenoogen",
                    "Year": "1902",
                    "Country": "Netherlands",
                    "Language": "Dutch",
                    "Title": "Van den man die dacht dat hij gestorven was",
                    "ATU": 1313,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "The Man who Thought Himself Dead"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The seven Swabians",
                    "ATU": 1321,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "Fools frightened"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Shepherd's Boy and the Wolf",
                    "ATU": 1333,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "The Shepherd who Cried \"Wolf!\" too often"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Man and the Satyr",
                    "ATU": 1342,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a fool",
                    "Specific Class": "Hot and Cold with the Same Breath"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Goosey Grizzel",
                    "ATU": 1353,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The old woman as troublemaker"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Goody Gainst-the-stream",
                    "ATU": 1365,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The obstinate wife"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die klugen Leute",
                    "ATU": 1384,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The husband hunts for three persons as stupid as his wife"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Not a Pin to Choose Between Them",
                    "ATU": 1384,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The husband hunts for three persons as stupid as his wife"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Frederick and Catherine",
                    "ATU": 1387,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "A Woman Draws Beer in the Cellar"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die faule Spinnerin",
                    "ATU": 1405,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The Lazy Spinner"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Silly Men And Cunning Wives",
                    "ATU": 1406,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The merry wives wager . . ."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Husband Who Was to Mind the House",
                    "ATU": 1408,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "The man who does his wife's work"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Hans in luck",
                    "ATU": 1415,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "Trading Away One's Fortune"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Gudbrand on the Hill-side",
                    "ATU": 1415,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "Trading Away One's Fortune"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.501785, 56.26392]
                },
                "properties": {
                    "Author": "H.C. Andersen / H. P. Paull",
                    "Year": "1872",
                    "Country": "Denmark",
                    "Language": "English",
                    "Title": "What the old man does is always right",
                    "ATU": 1415,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "Trading Away One's Fortune"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Lazy Harry",
                    "ATU": 1430,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "Air Castles"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Lean Lisa",
                    "ATU": 1430,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about Married Couples",
                    "Specific Class": "Air Castles"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Clever Else",
                    "ATU": 1450,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "Clever Elsie"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Odds and ends",
                    "ATU": 1451,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "A suitor chooses the thrifty girl"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Brides on their trial",
                    "ATU": 1452,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "Choosing a Bride by How She Cuts Cheese"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "????",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Storehouse Key in the Disdaff",
                    "ATU": 1453,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "Bride test: key in flax reveals laziness"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Tsju pus, vil du ned av bordet!",
                    "ATU": 1456,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "The blind fiancée"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "How One Went Out to Woo",
                    "ATU": 1459,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "Keeping up appearances"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Sju Âr gammal graut",
                    "ATU": 1462,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a woman",
                    "Specific Class": "Clean and tidy"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Master Thief",
                    "ATU": 1525,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The master thief"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The little peasant",
                    "ATU": 1535,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Rich Peasant and the Poor Peasant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.501785, 56.26392]
                },
                "properties": {
                    "Author": "H.C. Andersen / H. P. Paull",
                    "Year": "1872",
                    "Country": "Denmark",
                    "Language": "English",
                    "Title": "Little Claus and big Claus",
                    "ATU": 1535,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Rich Peasant and the Poor Peasant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Big Peter and Little Peter",
                    "ATU": 1535,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Rich Peasant and the Poor Peasant"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Our Parish Clerk",
                    "ATU": 1537,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The corpse killed five times"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Gutten som ville bli handelskar",
                    "ATU": 1538,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The youth cheated in selling oxen"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Peik",
                    "ATU": 1542,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The clever boy"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.501785, 56.26392]
                },
                "properties": {
                    "Author": "H.C. Andersen / H. P. Paull",
                    "Year": "1872",
                    "Country": "Denmark",
                    "Language": "English",
                    "Title": "The emperor's new suit",
                    "ATU": 1620,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Emperor's New Clothes"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Valiant Little Tailor",
                    "ATU": 1640,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Valiant Little Tailor"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Doctor Know-all",
                    "ATU": 1641,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "Doctor Know-all"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Charcoal-burner",
                    "ATU": 1641,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "Doctor Know-all"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Image of Mercury and the Carpenter",
                    "ATU": 1643,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Broken Image"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The three children of fortune",
                    "ATU": 1650,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The Three Lucky Brothers"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Honest Penny",
                    "ATU": 1651,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "Whittington's cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Horse and Groom",
                    "ATU": 1682,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "The groom teaches his horse to live without food"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Silly Matt",
                    "ATU": 1691,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "Don´t Eat too Greadly"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Clever Hans",
                    "ATU": 1696,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "What Should I Have Said?"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Going a-travelling",
                    "ATU": 1696,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "What Should I Have Said?"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs",
                    "Year": "1871",
                    "Country": "Spain",
                    "Language": "Catalan",
                    "Title": "Lo beneyt",
                    "ATU": 1696,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Stories about a man",
                    "Specific Class": "What Should I Have Said?"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Tom Totherhouse",
                    "ATU": 1725,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Jokes about Clergymen and Religious Figures",
                    "Specific Class": "The foolish parson in the trunk"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The turnip",
                    "ATU": 1737,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Jokes about Clergymen and Religious Figures",
                    "Specific Class": "Trading Places with the Trickster in a Sack"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Clever Grethel",
                    "ATU": 1741,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Jokes about Clergymen and Religious Figures",
                    "Specific Class": "Trickster Wives and Maids"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.824312, 39.074208]
                },
                "properties": {
                    "Author": "Aesop / George Fyler Townsend",
                    "Year": "1867",
                    "Country": "Greece",
                    "Language": "English",
                    "Title": "The Father and His Two Daughters",
                    "ATU": 1830,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Jokes about Clergymen and Religious Figures",
                    "Specific Class": "In trial sermon the parson promises the laymen the kind of weather they want"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The poor boy in the grave",
                    "ATU": 1876,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Tall Tales",
                    "Specific Class": "The Geese on the Line"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Domestic servants",
                    "ATU": 1940,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Tall Tales",
                    "Specific Class": "The Extraordinary Names"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Die drei Faulen",
                    "ATU": 1950,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Tall Tales",
                    "Specific Class": "The three lazy ones"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Knoist and his three sons",
                    "ATU": 1965,
                    "Main Class": "Anecdotes and Jokes",
                    "Branch Class": "Tall Tales",
                    "Specific Class": "Lying tales"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / H. L. BrÊkstad",
                    "Year": "????",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Nanny Who Wouldn't Go Home to Supper",
                    "ATU": 2015,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains based on Numbers, Objects, Animals or Names",
                    "Specific Class": "The goat that would not go home"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "Fair Katrinelje and Pif-Paf-Poltrie",
                    "ATU": 2019,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains based on Numbers, Objects, Animals or Names",
                    "Specific Class": "Fair Katrinelje and Pif-Paf-Poltrie"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The death of the little hen",
                    "ATU": 2021,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "The cock and the hen"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cock and Hen a-Nutting",
                    "ATU": 2021,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "The cock and the hen"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "????",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The Louse and the Flea",
                    "ATU": 2022,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "An Animal Mourns the Death of a Spouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Hare And The Heiress",
                    "ATU": 2022,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "An Animal Mourns the Death of a Spouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / H. L. BrÊkstad",
                    "Year": "????",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cock Who Fell into the Brewing Vat",
                    "ATU": 2022,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "An Animal Mourns the Death of a Spouse"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.74922, 40.463667]
                },
                "properties": {
                    "Author": "Francesc Maspons LabrÛs / Jason F. Quackenbush, Esq.",
                    "Year": "2016",
                    "Country": "Spain",
                    "Language": "English",
                    "Title": "The Mouse",
                    "ATU": 2023,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Death",
                    "Specific Class": "Little Ant Finds a Penny, Buys New Clothes with it, and Sits in her Doorway"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Pancake",
                    "ATU": 2025,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Eating",
                    "Specific Class": "The Fleeing Pancake"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe",
                    "Year": "1841",
                    "Country": "Norway",
                    "Language": "Norwegian",
                    "Title": "Kjetta som var sÂ fÊl til Â ete",
                    "ATU": 2027,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving Eating",
                    "Specific Class": "The fat cat"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / H. L. BrÊkstad",
                    "Year": "????",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "Nanny Who Wouldn't Go Home to Supper",
                    "ATU": 2030,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving other events",
                    "Specific Class": "The Old Woman and Her Pig"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The nail",
                    "ATU": 2039,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving other events",
                    "Specific Class": "The Horseshoe Nail"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm",
                    "Year": "1812",
                    "Country": "Germany",
                    "Language": "German",
                    "Title": "Rohrdommel und Wiedehopf",
                    "ATU": 2075,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving other events",
                    "Specific Class": "Tales in which animals talk"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.451526, 51.165691]
                },
                "properties": {
                    "Author": "Jacob & Wilhelm Grimm / Margaret Hunt",
                    "Year": "1884",
                    "Country": "Germany",
                    "Language": "English",
                    "Title": "The crumbs on the table",
                    "ATU": 2075,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving other events",
                    "Specific Class": "Tales in which animals talk"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Cock and Hen",
                    "ATU": 2075,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Chains involving other events",
                    "Specific Class": "Tales in which animals talk"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.468946, 60.472024]
                },
                "properties": {
                    "Author": "Asbj¯rnsen & Moe / George Dasent",
                    "Year": "1859",
                    "Country": "Norway",
                    "Language": "English",
                    "Title": "The Box With Something Pretty In It",
                    "ATU": 2250,
                    "Main Class": "Formula Tales",
                    "Branch Class": "Catch Tales",
                    "Specific Class": "Unfinished tales"
                }
            }
        ]
    }

    setTooltip(features) {
        if (features.length) {
            ReactDOM.render(
                React.createElement(
                    Tooltip, {
                        features
                    }
                ),
                this.tooltipContainer
            );
        } else {
            ReactDOM.unmountComponentAtNode(this.tooltipContainer);

        }
    }

    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 1.5,
            selectedOption: '',
            value: [1800, 2018]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    map;

    onLowerBoundChange = (e) => {
        this.setState({ lowerBound: +e.target.value });
    }
    onUpperBoundChange = (e) => {
        this.setState({ upperBound: +e.target.value });
    }
    onSliderChange = (value) => {
        console.log(value);
        this.setState({
            value,
        });
    }
    handleApply = () => {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    }


    componentDidMount() {

        this.filteredData = this.lists

        this.tooltipContainer = document.createElement('div');
        const { lng, lat, zoom, options } = this.state;

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [lng, lat],
            zoom
        });

        const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
            offset: [-120, 0]
        }).setLngLat([0, 0]).addTo(this.map);


        this.map.on('load', () => {

            var layers = this.map.getStyle().layers;

            this.map.addSource('tales', {
                type: 'geojson',
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 50,
                data: this.lists,
            });

            this.map.addSource('talesFull', {
                type: 'geojson',
                data: this.lists
            });

            this.map.addLayer({
                id: 'talesLayer',
                type: 'circle',
                source: 'tales',
                filter: ["has", "point_count"],
                paint: {
                    // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    "circle-color": [
                        "step", ["get", "point_count"],
                        "#51bbd6",
                        8,
                        "#f1f075",
                        15,
                        "#f28cb1"
                    ],
                    "circle-radius": [
                        "step", ["get", "point_count"],
                        20,
                        8,
                        30,
                        15,
                        40
                    ]
                }

            });



            this.map.addLayer({
                id: "unclustered-point",
                type: "circle",
                source: "talesFull",
                paint: {
                    "circle-color": "#fff",
                    "circle-radius": 14,
                    "circle-stroke-width": 1.5,
                    "circle-stroke-color": "#fff",
                    "circle-opacity": 0.1,
                    "circle-stroke-opacity": 0.25

                }
            });

            this.map.addLayer({
                id: "cluster-count",
                type: "symbol",
                source: "tales",
                filter: ["has", "point_count"],
                layout: {
                    "text-field": "{point_count_abbreviated}",
                    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                    "text-size": 12
                }
            });

        });

        this.map.on('move', () => {
            const { lng, lat } = this.map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)
            });
        });

        this.map.on('mousemove', (e) => {
            const features = this.map.queryRenderedFeatures(e.point, { layers: ['unclustered-point'] });
            tooltip.setLngLat(e.lngLat);
            this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
            this.setTooltip(features);
            console.log(features);

        });

    }
    filteredData;

    handleChange = (selectedOption) => {
        console.log(selectedOption);
        this.setState({ selectedOption });
        if (selectedOption === null) {

            this.map.getSource('tales').setData(this.lists);
            this.map.getSource('talesFull').setData(this.lists);
            this.filteredData = this.lists
            this.rangeChange(this.state.value)


        } else {
            this.filteredData = this.lists.features.filter(feature => feature.properties['Main Class'] === selectedOption.label);
            this.filteredData = {
                type: 'FeatureCollection',
                features: this.filteredData
            }
            console.log(this.filteredData)
            this.rangeChange(this.state.value)

        }
    }

    rangeChange = (value) => {
        console.log(value)
        this.setState({ value })
        console.log(this.filteredData)
        if (this.filteredData.features !== undefined) {
            var filteredRange = this.filteredData.features.filter(feature => feature.properties['Year'] >= value[0] && feature.properties['Year'] <= value[1]);
            var filteredDataRange = {
                type: 'FeatureCollection',
                features: filteredRange
            }

            this.map.getSource('tales').setData(filteredDataRange);
            this.map.getSource('talesFull').setData(filteredDataRange);
        }

    }


    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        return ( <
            div >
            <
            div className = "App" >
            <
            div ref = { el => this.mapContainer = el } className = "absolute top right left bottom" / >
            <
            /div> <
            div className = "bg-white absolute top left ml12 mt24 py12 px12 shadow-darken10 round z1 wmax180" >
            <
            div className = 'mb6' >
            <
            h2 className = "txt-bold txt-m block" > Fairytales through the ages. < /h2> <
            div className = "mt6" >
            <
            p className = 'txt-s color-gray' > This is a data visualization of the multi - lingual database of folktales according to the ATU classification. < /p> <
            /div> <
            div >

            <
            /div>


            <
            /div>

            <
            div className = "mt6 mb6" >
            <
            h2 className = "txt-s txt-bold block" > Themes < /h2> <
            Select name = "form-field-name"
            value = { value } onChange = { this.handleChange } options = {
                [
                    { value: 'Animal Tales', label: 'Animal Tales' },
                    { value: 'Tales of Magic', label: 'Tales of Magic' },
                    { value: 'Religious Tales', label: 'Religious Tales' },
                    { value: 'Realistic Tales', label: 'Tales of stupid Ogres(Giant, Devil)' },
                    { value: 'Anecdotes and Jokes', label: 'Anecdotes and Jokes' },
                    { value: 'Formula Tales', label: 'Formula Tales' }
                ]
            }
            /> <
            /div>

            <
            div className = "mt6 mb24" >
            <
            h2 className = "txt-s txt-bold block" > Years < /h2> <
            div className = "px12" >
            <
            Range min = { 1800 } max = { 2018 } defaultValue = {
                [1800, 2018] } value = { this.state.value } onChange = { this.rangeChange } marks = { marks } tipFormatter = { value => `${value}%` }
            /> <
            /div> <
            /div> <
            /div> <
            /div>

        );
    }
}


ReactDOM.render( < App / > , document.getElementById('root'));