const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
/* White-crowned Sparrow
Black Phoebe
Gila Woodpecker
Verdin
Curved-billed Thrasher
Lesser Nighthawk
Brown-headed Cowbird
Say's Phoebe
*/
const birds = {
    'burrowing owl': {
        'latin name': 'Athene cunicularia',
        'family': 'Owls',
        'habitat': ['open grassland', 'prairie', 'farmland', 'airfields'],
        'size': {
            'lengthInches': 9,
            'widthInches': 24
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brazilian_burrowing_owl_%28Athene_cunicularia_grallaria%29.jpg/220px-Brazilian_burrowing_owl_%28Athene_cunicularia_grallaria%29.jpg' 
    },
    'american coot': {
        'latin name': 'Fulica americana​',
        'family': 'Rails, Gallinules, Coots',
        'habitat': ['ponds', 'lakes', 'marshes', 'fields', 'park ponds', 'salt bays'],
        'size': {
            'lengthInches': 16,
            'widthInches': 26
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/American_coot_in_Prospect_Park_%2806152%29.jpg/220px-American_coot_in_Prospect_Park_%2806152%29.jpg'
    },
    'white-winged dove': {
        'latin name': 'Zenaida asiatica',
        'family': 'Pigeons and Doves',
        'habitat': ['river woods', 'mesquites', 'saguaros', 'groves', 'towns'],
        'size': {
            'lengthInches': 12,
            'widthInches': 20
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Zenaida_asiatica_-Tuscon_-Arizona_-USA_-8a.jpg/220px-Zenaida_asiatica_-Tuscon_-Arizona_-USA_-8a.jpg'
    },
    'northern mocking bird': {
        'latin name': 'Mimus polyglottos',
        'family': 'Mockingbirds and Thrashers',
        'habitat': ['brushy areas', 'thickets', 'roadsides', 'farms', 'towns'],
        'size': {
            'lengthInches': 1,
            'widthInches': 14
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mockingbird_in_Bay_Ridge_%2885082%29.jpg/220px-Mockingbird_in_Bay_Ridge_%2885082%29.jpg'
    },
    'anna\'s hummingbird': {
        'latin name': 'Calypte anna',
        'family': 'Hummingbirds',
        'habitat': ['gardens', 'chaparral', 'open woods'],
        'size': {
            'lengthInches': 4,
            'widthInches': 5
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Anna%27s_hummingbird.jpg/220px-Anna%27s_hummingbird.jpg'
    },
    'common black hawk': {
        'latin name': 'Buteogallus anthracinus',
        'family': 'Hawks and Eagles',
        'habitat': ['wooded streams'],
        'size': {
            'lengthInches': 21,
            'widthInches': 48
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Buteogallus_anthracinus_subtilis.jpg/220px-Buteogallus_anthracinus_subtilis.jpg' 
    },
    'great-tailed grackle': {
        'latin name': 'Quiscalus mexicanus',
        'family': 'New World blackbirds ',
        'habitat': ['open grassland', 'pastures', 'wetlands', 'mangroves','chaparral', 'urban settings'],
        'size': {
            'lengthInches': 18,
            'widthInches': 22
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Quiscalus_mexicanusMPCCA20061226-0567B.jpg/220px-Quiscalus_mexicanusMPCCA20061226-0567B.jpg' 
    },
    'mourning dove': {
        'latin name': 'Zenaida macroura',
        'family': 'Dove',
        'habitat': ['woodlannds', 'prairie', 'thorn forest'],
        'size': {
            'lengthInches': 12,
            'widthInches': 18
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/220px-Mourning_Dove_2006.jpg' 
    },
    'inca dove': {
        'latin name': 'Columbina inca',
        'family': 'Dove',
        'habitat': ['residential areas', 'thorn forest', 'savanna'],
        'size': {
            'lengthInches': 9,
            'widthInches': 11
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/IncaDove.jpg/220px-IncaDove.jpg' 
    },
    'house sparrow': {
        'latin name': 'Passer domesticus',
        'family': 'Sparrow',
        'habitat': ['urban areas', 'pastures', 'agricultural fields', 'feed lots', 'farms', 'grain elevators'],
        'size': {
            'lengthInches': 6,
            'widthInches': 10
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Passer_domesticus_male_%2815%29.jpg/220px-Passer_domesticus_male_%2815%29.jpg'
    },
    'eurasian collared dove': {
        'latin name': 'Streptopelia decaocto',
        'family': 'Dove',
        'habitat': ['towns', 'parks', 'farmland', 'orchards', 'mixed thickets'],
        'size': {
            'lengthInches': 13,
            'widthInches': 22
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg/220px-Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg'
    },
    'European Starling': {
        'latin name': 'Sturnus Vulgaris',
        'family': 'Starling',
        'habitat': ['towns', 'savanna', 'farmland'],
        'size': {
            'lengthInches': 9,
            'widthInches': 15
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lamprotornis_hildebrandti_-Tanzania-8-2c.jpg/220px-Lamprotornis_hildebrandti_-Tanzania-8-2c.jpg'
    },
    'rock pigeon': {
        'latin name': 'Columba livia',
        'family': 'Dove',
        'habitat': ['cities', 'towns', 'farmland'],
        'size': {
            'lengthInches': 13,
            'widthInches': 23
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG/220px-Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG'
    },
    'house finch': {
        'latin name': 'Carpodacus mexicanus',
        'family': 'True finch',
        'habitat': ['thorn forrests', 'arid scrub', 'pine-oak', 'juniper', 'sagebrush', 'agricultural areas', 'urban areas'],
        'size': {
            'lengthInches': 6,
            'widthInches': 10
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Carpodacus_mexicanus_-Madison%2C_Wisconsin%2C_USA-8.jpg/220px-Carpodacus_mexicanus_-Madison%2C_Wisconsin%2C_USA-8.jpg'
    },
    'abert\'s towhee': {
        'latin name': 'Pipilo aberti',
        'family': 'New World sparrows',
        'habitat': ['willow', 'cottonwood', 'mesquite'],
        'size': {
            'lengthInches': 9,
            'widthInches': 11
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pipilo_aberti.jpg/220px-Pipilo_aberti.jpg'
    },
    'red-tailed hawk': {
        'latin name': 'Buteo jamaicensis',
        'family': 'Raptors',
        'habitat': ['open woodlands', 'thorn forest', 'savanna'],
        'size': {
            'lengthInches': 22,
            'widthInches': 53
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Red-tailed_Hawk.jpg/220px-Red-tailed_Hawk.jpg'
    },
    'peach-faced lovebird': {
        'latin name': 'Agapornis roseicollis',
        'family': 'Lovebird',
        'habitat': ['woodlands', 'semi desert areas', 'savanna', 'shrubland'],
        'size': {
            'lengthInches': 7,
            'widthInches': 4
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rosy-faced_lovebird_%28Agapornis_roseicollis_roseicollis%29.jpg/220px-Rosy-faced_lovebird_%28Agapornis_roseicollis_roseicollis%29.jpg'
    },

}

app.get('/api', (request, response) => {
        response.json({'possible_bird_names': Object.keys(birds)});
});

app.get('/api/all', (request, response) => {
    response.json(birds);
});

app.get('/api/:bird', (request, response) => {
    const birdName = request.params.bird.toLowerCase()
    if (birds[birdName]) {
        response.json(birds[birdName]);
    } else {
        response.json({'possible_bird_names': Object.keys(birds)});
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
