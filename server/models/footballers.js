const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

  class Footballer {
        constructor(data){
            this.id = data.id,
            this.name = data.name,
            this.age = data.age,
            this.club = data.club
        }

        static get all() {
            return new Promise (async (resolve, reject) => {
                try {
                    const db = await init();
                    const footballData = await db.collection('footballers').find().toArray();
                    const footballers = footballData.map(f => new Footballer({...f, id: f._id}));
                    resolve(footballers);
                } catch (err) {
                    reject("Error getting footballers");
                }
            })
        }


  }

  module.exports = Footballer;