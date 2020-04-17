import gql from "graphql-tag";

import { RETURN_VALUES, QUERY_DICT } from "./queries";

export const queryBuilder = (queryList, queryType = "query") => {
  const setQueryString = (parameter) => {
    let queryStr = "";
    if (!parameter) return queryStr;
    Object.keys(parameter).forEach((key) => {
      const val = parameter[key];
      if ((!val || typeof val === "object") && val !== false) return;

      if (typeof val === "number" || typeof val === "boolean") {
        queryStr += `${key} : ${val} `;
      } else {
        queryStr += `${key} : "${val}" `;
      }
    });

    if (queryStr) {
      return `(${queryStr})`;
    } else {
      return "";
    }
  };

  const buildQuery = (queryName, queryStr, modelName) => {
    return `
    ${queryName} ${queryStr}{
      ${RETURN_VALUES[modelName]}
    }
  `;
  };

  const completeQuery = (type) => {
    let str = "";
    listBuiltQueries.forEach((query) => {
      str += query + " ";
    });

    return gql`
      ${queryType} {
       ${str}
      }
    `;
  };

  const getQueryName = (modelName) => {
    return QUERY_DICT[modelName][queryType];
  };

  const loopQueries = () => {
    queryList.map((query) => {
      var { modelName, parameter } = query;
      const queryName = getQueryName(modelName, queryType);
      const queryStr = setQueryString(parameter);
      const builtQuery = buildQuery(queryName, queryStr, modelName);

      listBuiltQueries.push(builtQuery);
    });

    return completeQuery();
  };

  console.log("queryList", queryList);

  let listBuiltQueries = [];
  return loopQueries();
};
