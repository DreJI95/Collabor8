import gql from 'graphql-tag';

export const getProfessionals = gql`
{
    getProfessionals {
        _id
        firstName
        lastName
        url
        strengths
        weaknesses
        skills {
            _id
            skill
        }
    }
}`;

export const getProfessional = gql`
query professional($id: ID!){
    professional(_id: $id)
    {
        _id
        firstName
        lastName
        url
        strengths
        weaknesses
        skills {
            _id
            skill
        }
    }
}`;

export const getSkills = gql`
{
    getSkills{
        _id
        skill
    }
}`;

export const getSkill = gql`
query skill($id: ID!){
    skill(_id: $id)
    {
        _id
        skill
    }
}`;

export const getProjects = gql`
{

}`;

export const getProject = gql`
{

}`;

export const getTeams = gql`
{

}`;

export const getTeam = gql`
{

}`;