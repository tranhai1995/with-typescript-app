import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  .roboto {
    font-family: 'Roboto', sans-serif;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1180px;
    }
  }

  .ant-form-vertical {
    padding-bottom: 0 !important;
  }

  @media (max-width: 768px) {
    .mb-nmlr {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .ant-form-item .ant-form-item-label {
      padding: 0 !important;
    }

    .mb-pt12 {
      padding-top: 12px;
    }
  }

  .pt12 {
    padding-top: 12px;
  }

  .custom-label {
    &.standard {
      background-color: #666666;
    }
    &.top16 {
      background-color: #F2A030;
    }
    &.top8 {
      background-color: #E04C4C;
    }
    &.top1 {
      background-color: #99813D;
    }

    &.高校 {
      background-color: #E86692;
    }
    &.大学 {
      background-color: #9064F9;
    }
    &.中学 {
      background-color: #F2A030;
    }
    &.小学 {
      background-color: #E6C917;
    }
    &.一般 {
      background-color: #3DB7E8;
    }
    &.日本記録 {
      background-color: #545D93;
    }

    height: 16px;
    width: 48px;
    border-radius: 4px;

    .label-top {
      color: #FFFFFF;
      font-family: "Noto Sans JP";
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 16px;
      text-align: center;
    }

    span {
      color: #666666;
      font-family: Roboto, sans-serif !important;
      font-size: 10px;
      font-weight: 500;
      line-height: 10px;
      height: 10px;
    }
  }

  .label-wrapper {
    width: 100px;
    height: 100px;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;

    //& .custom-label{
    //  margin:auto;
    //}

    & .box{
      display:none;
    }
    &:hover .box{
      display:block;
    }
  }
`;
