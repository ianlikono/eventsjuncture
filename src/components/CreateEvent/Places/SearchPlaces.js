import { Input } from "antd";
import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import styled from "styled-components";
import { classnames } from "./helpers";

const StyledInput = styled(Input)`
  background: ${props => props.theme.colorPrimaryLight};
  color: ${props => props.theme.textColorDark};
  &:hover {
    border-color: ${props => props.theme.colorPurpleDark};
  }
  &:focus {
    border-color: ${props => props.theme.colorPurpleDark};
  }
`;

class SearchPlaces extends React.Component {
  render() {
    return (
      <div>
        <PlacesAutocomplete
          onChange={this.props.handlePlacesChange}
          value={this.props.address}
          onSelect={this.props.handlePlacesSelect}
          onError={this.props.handlePlacesError}
          shouldFetchSuggestions={this.props.address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <StyledInput
                    {...getInputProps({
                      placeholder: "Search Places...",
                      className: "Demo__search-input"
                    })}
                  />
                  {this.props.address.length > 0 && (
                    <button
                      className="Demo__clear-button"
                      onClick={this.props.handlePlacesCloseClick}
                    >
                      x
                    </button>
                  )}
                </div>
                {suggestions.length > 0 && (
                  <div className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames("Demo__suggestion-item", {
                        "Demo__suggestion-item--active": suggestion.active
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{" "}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>
        {this.props.errorMessage.length > 0 && (
          <div className="Demo__error-message">{this.props.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default SearchPlaces;
