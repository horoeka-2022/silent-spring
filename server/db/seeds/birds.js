exports.seed = (knex) => {
  return knex('birds')
    .del()
    .then(() => {
      return knex('birds').insert([
        {
          ML_Catalog_Number: 212043711,
          Common_Name: 'South Island Takahe',
          Scientific_Name: 'Porphyrio hochstetteri',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes: '',
        },
        {
          ML_Catalog_Number: 203926781,
          Common_Name: "Parkinson's Petrel",
          Scientific_Name: 'Procellaria parkinsoni',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Hauraki Gulf--general',
          Media_notes:
            'Calls by a group of birds while feeding on chum. Recorded from a ship. Elevation: 0 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 203926471,
          Common_Name: 'Brown Teal',
          Scientific_Name: 'Anas chlorotis',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'Calls by one bird. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 203926621,
          Common_Name: 'Stitchbird',
          Scientific_Name: 'Notiomystis cincta',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'A female calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 203926751,
          Common_Name: 'Australasian Swamphen',
          Scientific_Name: 'Porphyrio melanotus',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'A bird calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 285324401,
          Common_Name: 'North Island Saddleback',
          Scientific_Name: 'Philesturnus rufusater',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Rotoroa Island—general',
          Media_notes: '',
        },
        {
          ML_Catalog_Number: 204016011,
          Common_Name: 'Whitehead',
          Scientific_Name: 'Mohoua albicilla',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'Several birds calling from bushes. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 203926551,
          Common_Name: 'New Zealand Bellbird',
          Scientific_Name: 'Anthornis melanura',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi',
          Media_notes: 'NOTES: 10 dB pad engaged on microphone.',
        },
        {
          ML_Catalog_Number: 102811801,
          Common_Name: 'Mallard',
          Scientific_Name: 'Anas platyrhynchos',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Michaels Avenue Reserve Pond',
          Media_notes:
            "Michael's Park Pond, Auckland 01/06/18.  A bird calling loudly from rushes as a flock on the pond swam away from me, calling less loudly.  Other species in the background.",
        },
        {
          ML_Catalog_Number: 343910621,
          Common_Name: 'Black Swan',
          Scientific_Name: 'Cygnus atratus',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Weona-Westmere Coastal Walkway',
          Media_notes: 'Swan call at night on water',
        },
        {
          ML_Catalog_Number: 380864781,
          Common_Name: 'Morepork',
          Scientific_Name: 'Ninox novaeseelandiae',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Penzance Road, Auckland, NZ',
          Media_notes: '',
        },
        {
          ML_Catalog_Number: 203926491,
          Common_Name: 'New Zealand Fernbird (New Zealand)',
          Scientific_Name: 'Poodytes punctatus [punctatus Group]',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'Calls by one bird. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
        {
          ML_Catalog_Number: 479309141,
          Common_Name: 'Swamp Harrier',
          Scientific_Name: 'Circus approximans',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Papakura--Hays Creek Reservoir',
          Media_notes:
            "Australian Harrier calls from one, possibly two unseen birds in flight near Hay's Creek Reservoir, Papakura 29/08/22",
        },
        {
          ML_Catalog_Number: 190120641,
          Common_Name: 'Pied Cormorant',
          Scientific_Name: 'Phalacrocorax varius',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Orakei Basin',
          Media_notes:
            'Pied Shag colony with active nests, Orakei Basin, Auckland 27/11/19',
        },
        {
          ML_Catalog_Number: 204016071,
          Common_Name: 'Little Spotted Kiwi',
          Scientific_Name: 'Apteryx owenii',
          Country: 'New Zealand',
          State: 'Auckland',
          Locality: 'Tiritiri Matangi--general',
          Media_notes:
            'A bird calling at night. Elevation: 53 m. Date added to IBC: June 22, 2016.',
        },
      ])
    })
}