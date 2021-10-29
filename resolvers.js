import { GraphQLDateTime } from "graphql-iso-date";

// got this from (https://jacobruiz.com/blog/2019/6/11/why-use-custom-date-scalar-types-in-graphql)
const customScalarResolver = {
    Date: GraphQLDateTime
};



export default [
    customScalarResolver,

];