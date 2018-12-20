import { Button, Icon, Input, message, Modal, Select, Upload } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
import { IconContext } from "react-icons";
import { FaThumbsUp } from "react-icons/fa";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { createEvent } from "../../graphql/mutations";
import { Cover, NewEvent, UploadOk, Wrapper } from "./CreateStyles";
import DatePicker from "./DatePicker";
import Form from "./FormStyles";
import { GeoStyles } from "./GeoStyles";
import SearchPlaces from "./Places/SearchPlaces";

const Option = Select.Option;

class Create extends React.Component {
  state = {
    selectTagsState: false,
    title: "",
    description: "",
    address: "",
    errorMessage: "",
    latitude: null,
    longitude: null,
    isGeocoding: false,
    previewVisible: false,
    previewImage: "",
    fileList: [],
    coverUrl: "",
    largeCoverUrl: "",
    uploadVisible: true,
    startDate: "",
    endDate: "",
    eventTag: ""
  };

  /*****************************Maps**********************************/
  handlePlacesChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: ""
    });
  };

  handlePlacesSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log("error", error); // eslint-disable-line no-console
      });
  };

  handlePlacesCloseClick = () => {
    this.setState({
      address: "",
      latitude: null,
      longitude: null
    });
  };

  handlePlacesError = (status, clearSuggestions) => {
    console.log("Error from Google Maps API", status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };
  /*****************************Maps**********************************/

  /*****************************Upload**********************************/

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    this.setState({ uploadVisible: true });
  };

  onUploadClick = async () => {
    this.setState({ uploadVisible: false });
    const formData = new FormData();
    formData.append("file", this.state.fileList[0].originFileObj);
    formData.append("upload_preset", "eventsJunctureCovers");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/doelo01na/image/upload",
      {
        method: "POST",
        body: formData
      }
    );
    const file = await res.json();
    this.setState({ coverUrl: file.secure_url });
    this.setState({ largeCoverUrl: file.eager[0].secure_url });
    console.log(file);
  };

  /*****************************Upload**********************************/

  handleInputChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleTagsSelect = (value, tag) => {
    this.setState({ eventTag: tag.props.children });
  };

  dateOnChange = (dates, dateStrings) => {
    this.setState({ startDate: dateStrings[0], endDate: dateStrings[1] });
  };

  render() {
    const tags = ["music", "drama", "art", "sports"];
    const children = tags.map((tag, i) => <Option key={i}>{tag}</Option>);
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <Mutation mutation={gql(createEvent)}>
        {(createEvent, { loading, error }) => (
          <div>
            <React.Fragment>
              <Wrapper>
                <Cover src="https://images.unsplash.com/photo-1458891216473-4f26bb4eb40e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47ca1f94ecbd3969bc5b948a6b4ec208&auto=format&fit=crop&w=1350&q=80" />
                <NewEvent>
                  <Form
                    onSubmit={e => {
                      e.preventDefault();
                    }}
                    data-test="form"
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="title">
                        Title
                        <Input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          value={this.state.title}
                          onChange={this.handleInputChange}
                        />
                      </label>
                      <label htmlFor="description">
                        Description
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Enter A Description"
                          required
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          rows="7"
                        />
                      </label>
                      <label htmlFor="description">
                        Tags
                        <Select
                          size="default"
                          placeholder="Please select Tags"
                          onChange={this.handleTagsSelect}
                          style={{ width: "100%" }}
                        >
                          {children}
                        </Select>
                      </label>
                      <label htmlFor="title">
                        Location
                        <GeoStyles>
                          <SearchPlaces
                            handlePlacesChange={this.handlePlacesChange}
                            handlePlacesSelect={this.handlePlacesSelect}
                            handlePlacesCloseClick={this.handlePlacesCloseClick}
                            handlePlacesError={this.handlePlacesError}
                            address={this.state.address}
                            errorMessage={this.state.errorMessage}
                            isGeocoding={this.state.isGeocoding}
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}
                          />
                        </GeoStyles>
                      </label>

                      <label htmlFor="title">
                        Date And Time
                        <DatePicker dateOnChange={this.dateOnChange} />
                      </label>
                      <label htmlFor="images">
                        Upload Image
                        <div className="clearfix">
                          <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                          >
                            {fileList.length ? null : uploadButton}
                          </Upload>
                          {fileList.length && this.state.uploadVisible ? (
                            <UploadOk onClick={this.onUploadClick}>
                              {" "}
                              <h3>Ok</h3>
                              <IconContext.Provider value={{ size: "2em" }}>
                                <FaThumbsUp />
                              </IconContext.Provider>
                            </UploadOk>
                          ) : null}
                          <Modal
                            visible={previewVisible}
                            footer={null}
                            onCancel={this.handleCancel}
                          >
                            <img
                              alt="example"
                              style={{ width: "100%" }}
                              src={previewImage}
                            />
                          </Modal>
                        </div>
                      </label>
                      <Button
                        disabled={this.state.largeCoverUrl === ""}
                        onClick={async () => {
                          const {
                            title,
                            description,
                            endDate,
                            eventTag,
                            largeCoverUrl,
                            latitude,
                            longitude,
                            coverUrl,
                            address,
                            startDate
                          } = this.state;
                          if (
                            title === "" ||
                            description === "" ||
                            endDate === "" ||
                            eventTag === "" ||
                            largeCoverUrl === "" ||
                            !latitude ||
                            !longitude ||
                            coverUrl === "" ||
                            address === "" ||
                            startDate === ""
                          ) {
                            message.error(
                              "Please make sure all the you left nothing empty!",
                              3
                            );
                          } else {
                            const response = await createEvent({
                              variables: {
                                input: {
                                  title,
                                  description,
                                  endDate,
                                  tag: eventTag,
                                  largeCoverUrl,
                                  latitude,
                                  longitude,
                                  coverUrl,
                                  address,
                                  startDate,
                                  eventOwnerId: "88b52136-4cba-463a-b457-e8e22b6d52c7"
                                }
                              }
                            });
                            console.log(response);
                          }
                        }}
                        type="primary"
                      >
                        Create
                      </Button>
                    </fieldset>
                  </Form>
                </NewEvent>
              </Wrapper>
            </React.Fragment>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Create;
