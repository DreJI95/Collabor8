const {getProfessional, getProfessionals, createProfessional, deleteProfessional, updateProfessional} = require('./modelResolvers/professionalResolvers')
const { getSkill, getSkills, createSkill, deleteSkill} = require('./modelResolvers/skillResolvers');

const resolvers = {
    Query: {
        getProfessional,
        getProfessionals,
        getSkill,
        getSkills
    },
    Mutation: {
        createProfessional,
        deleteProfessional,
        updateProfessional,
        createSkill,
        deleteSkill
    }
};   
    
module.exports = resolvers;

// {
//     "data": {
//         "getSkills": [
//         {
//             "skill": "Javascript",
//             "_id": "6122c1e92d6c3020485906cf"
//         },
//         {
//             "skill": "C++",
//             "_id": "6122c27b5e7b761f848001ef"
//         },
//         {
//             "skill": "Python",
//             "_id": "6122c2d35238925b70c88807"
//         },
//         {
//             "skill": "Java",
//             "_id": "6122c2eeafae5c4b2c9c54ca"
//         },
//         {
//             "skill": "React",
//             "_id": "6122c2fcafae5c4b2c9c54ce"
//         },
//         {
//             "skill": "Test",
//             "_id": "6122d240c55bac7e548dce5d"
//         },
//         {
//             "skill": "Javas",
//             "_id": "6122d249c55bac7e548dce5f"
//         }
//         ]
//     }
// }

// {
//     "data": {
//       "getProfessionals": [
//         {
//           "_id": "6122c78353b5be4e18c2d676",
//           "email": "test@live.ca",
//           "skills": [
//             {
//               "skill": "Javascript"
//             },
//             {
//               "skill": "C++"
//             },
//             {
//               "skill": "Python"
//             }
//           ]
//         },
//         {
//           "_id": "6122c78d53b5be4e18c2d678",
//           "email": "test2@live.ca",
//           "skills": []
//         }
//       ]
//     }
//   }