import styled from "styled-components";

export const GeoStyles = styled.div`
  position: relative;
  .Demo__suggestion-icon {
    margin-right: 8px;
  }

  .Demo__search-input-container {
    position: relative;
    background: ${props => props.theme.colorPrimaryLight};
  }

  .Demo__search-input,
  .Demo__search-input:focus,
  .Demo__search-input:active {
    box-shadow: ${props => props.theme.BoxShadow};
    border: 1px solid #707070;
    display: block;
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    border-radius: 0.2rem;
    outline: none;
  }

  .Demo__clear-button,
  .Demo__clear-button:active,
  .Demo__clear-button:focus {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #999;
  }

  .Demo__autocomplete-container {
    border-bottom: honeydew;
    border-left: honeydew;
    border-right: honeydew;
    border-top: ${props => `1px solid ${props.theme.BorderColor}`};
    box-shadow: ${props => props.theme.BoxShadow};
    border-radius: 0 0 2px 2px;
  }

  .Demo__suggestion-item {
    padding: 8px;
    text-align: left;
    background-color: ${props => props.theme.colorPrimaryLight};
    cursor: pointer;
  }

  .Demo__suggestion-item--active {
    background-color: ${props => props.theme.colorPrimaryDark};
  }

  .Demo__dropdown-footer {
    display: flex;
    justify-content: flex-end;
    padding: 4px;
  }

  .Demo__dropdown-footer-image {
    display: inline-block;
    width: 150px;
  }

  .Demo__spinner {
    color: ${props => props.theme.textColorDark};
    font-size: 3rem;
  }

  .Demo__error-message {
    color: red;
  }

  .Demo__geocode-result-header {
    font-size: 20px;
    color: ${props => props.theme.textColorDark};
  }

  @media (max-width: 480px) {
    .autocomplete-container {
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    .alert {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      -webkit-animation: fadein 0.75s;
      -moz-animation: fadein 0.75s;
      -ms-animation: fadein 0.75s;
      -o-animation: fadein 0.75s;
      animation: fadein 0.75s;
    }

    .btn {
      margin-top: 1.5rem;
    }

    .form-group {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
      width: 50%;
    }
  }
`;
