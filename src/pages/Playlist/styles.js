import styled from "styled-components";

export const Container = styled.div`
         margin: 10px 0 0 40px;
         background-color: #121212;

         h1 {
           font-family: "Roboto", sans-serif;
           text-overflow: ellipsis;
           white-space: nowrap;
           overflow: hidden;
           max-width: 100%;
           display: inline-block;
           color: #fff;
         }

         section {
           display: flex;
           flex-direction: wrap;
           flex-wrap: wrap;

           div {
             padding: 20px;
             background: #282828;
             border-radius: 6px;
             margin: 10px;

             img {
               width: 160px;
               height: 170px;
             }

             h4 {
               font-family: "Roboto", sans-serif;
               font-weight: 600;
               color: #fff;
               padding: 10px 1px;
               max-width: 160px;
             }

             p {
               max-width: 120px;
               margin-bottom: 0;
               font-size: 13px;
               color: #a4a4a4;
               text-overflow: ellipsis;
               white-space: nowrap;
               overflow: hidden;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
               margin-top: 4px;
               white-space: normal;
             }
           }
         }

         #pagination {
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 17px 0;

           .MuiSelect-icon {
             color: #fff;
           }

           .MuiIconButton-label {
             color: #fff;
           }

           .MuiIconButton-root.Mui-disabled {
             color: #fff;
           }

           .MuiSelect-select.MuiSelect-select {
             color: #fff;
           }

           p {
             color: #fff;
           }
         }
       `;
