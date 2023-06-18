
import React from 'react';
import { connect } from 'react-redux';
import { Layout} from 'antd';
import { AutoComplete } from 'antd';
const { Header, Content, Footer } = Layout;

class Autocomplete extends React.Component {

  state = {
    value: '',
    dataSource: [],
  };

  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

  onChange = value => {
    this.setState({ value });
  };


  handleInputChange = (event) => {
    // Dispatch an action to fetch suggestions from the API
    // Pass inputValue to the action creator to use it in the API request
    this.props.fetchSuggestions(event);
  };

  render() {
    //const { suggestions } = this.props;
     /*
    <div>
      <AutoComplete
        style={{ width: 200 }}
        onSearch={(text) => this.handleInputChange(text)}
        placeholder="input here"
      />
      <br />

    {(() => {
        let results = [];
        for (const suggestion of suggestions) {
          results.push(
            <ul>
              <li >{suggestion.description}</li>
              </ul>
          );
          }
        return results;
      })()}
    */

    return (
      <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#ffcf00'
        }}
      >
       <div className="demo-logo" />
       <h1>Autocomplete App</h1>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 380, background: 'light-grey' }}>

        <AutoComplete
          dataSource={this.state.dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: (inputValue) => {

    // Make API request using Axios or Fetch library
    // Replace 'YOUR_API_KEY' with your actual Google Text API key
    /*
      instanceAPI
      .get(
        `/json?input=${inputValue}&key=AIzaSyCU-SexrwQKcoRuXx5uY-2g2bPUh1fsvvA`
      )
      .then((response) => {
        const suggestions = response.data.predictions || [];

        // Dispatch an action to update the suggestions in the Redux store
        dispatch({ type: 'SET_SUGGESTIONS', payload: suggestions });
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });

      if (inputValue !== '') {
        dispatch({ type: 'SET_SUGGESTIONS', payload: dummyData?.predictions });
      } else {
        dispatch({ type: 'SET_SUGGESTIONS', payload: []});
      }*/
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

/*export const dummyData = 
{
  "predictions" : [
     {
        "description" : "dfgfg - 36 B Street - Dubai - United Arab Emirates",
        "matched_substrings" : [
           {
              "length" : 4,
              "offset" : 0
           }
        ],
        "place_id" : "ChIJ8Wex2aVpXz4RCHSHeq1NuFw",
        "reference" : "ChIJ8Wex2aVpXz4RCHSHeq1NuFw",
        "structured_formatting" : {
           "main_text" : "dfgfg",
           "main_text_matched_substrings" : [
              {
                 "length" : 4,
                 "offset" : 0
              }
           ],
           "secondary_text" : "36 B Street - Dubai - United Arab Emirates"
        },
        "terms" : [
           {
              "offset" : 0,
              "value" : "dfgfg"
           },
           {
              "offset" : 8,
              "value" : "36 B Street"
           },
           {
              "offset" : 22,
              "value" : "Dubai"
           },
           {
              "offset" : 30,
              "value" : "United Arab Emirates"
           }
        ],
        "types" : [ "doctor", "health", "point_of_interest", "establishment" ]
     },
     {
        "description" : "dfgfhg, Z\u00fcrich, Switzerland",
        "matched_substrings" : [
           {
              "length" : 4,
              "offset" : 0
           }
        ],
        "place_id" : "ChIJL6MAWWoLkEcRjEnji7i33xc",
        "reference" : "ChIJL6MAWWoLkEcRjEnji7i33xc",
        "structured_formatting" : {
           "main_text" : "dfgfhg",
           "main_text_matched_substrings" : [
              {
                 "length" : 4,
                 "offset" : 0
              }
           ],
           "secondary_text" : "Z\u00fcrich, Switzerland"
        },
        "terms" : [
           {
              "offset" : 0,
              "value" : "dfgfhg"
           },
           {
              "offset" : 8,
              "value" : "Z\u00fcrich"
           },
           {
              "offset" : 16,
              "value" : "Switzerland"
           }
        ],
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
     },
     {
        "description" : "dfgfdgdfg\u060c Makkah Street\u060c Al Khobar Saudi Arabia",
        "matched_substrings" : [
           {
              "length" : 4,
              "offset" : 0
           }
        ],
        "place_id" : "ChIJW9yTv1DDST4RJMg9mV7-FmY",
        "reference" : "ChIJW9yTv1DDST4RJMg9mV7-FmY",
        "structured_formatting" : {
           "main_text" : "dfgfdgdfg",
           "main_text_matched_substrings" : [
              {
                 "length" : 4,
                 "offset" : 0
              }
           ],
           "secondary_text" : "Makkah Street\u060c Al Khobar Saudi Arabia"
        },
        "terms" : [
           {
              "offset" : 0,
              "value" : "dfgfdgdfg"
           },
           {
              "offset" : 11,
              "value" : "Makkah Street"
           },
           {
              "offset" : 26,
              "value" : "Al Khobar"
           },
           {
              "offset" : 36,
              "value" : "Saudi Arabia"
           }
        ],
        "types" : [ "point_of_interest", "establishment" ]
     },
     {
        "description" : "dfgfg, Oberstocken, Switzerland",
        "matched_substrings" : [
           {
              "length" : 4,
              "offset" : 0
           }
        ],
        "place_id" : "ChIJ5WZ1MYxTjkcR9MReAHu0vyw",
        "reference" : "ChIJ5WZ1MYxTjkcR9MReAHu0vyw",
        "structured_formatting" : {
           "main_text" : "dfgfg",
           "main_text_matched_substrings" : [
              {
                 "length" : 4,
                 "offset" : 0
              }
           ],
           "secondary_text" : "Oberstocken, Switzerland"
        },
        "terms" : [
           {
              "offset" : 0,
              "value" : "dfgfg"
           },
           {
              "offset" : 7,
              "value" : "Oberstocken"
           },
           {
              "offset" : 20,
              "value" : "Switzerland"
           }
        ],
        "types" : [ "health", "point_of_interest", "establishment" ]
     },
     {
        "description" : "Zafer, DFGF, Bulan\u0131k/Mu\u015f, T\u00fcrkiye",
        "matched_substrings" : [
           {
              "length" : 4,
              "offset" : 7
           }
        ],
        "place_id" : "ChIJGaxPm_ZpbUAReIKaQH3T69w",
        "reference" : "ChIJGaxPm_ZpbUAReIKaQH3T69w",
        "structured_formatting" : {
           "main_text" : "DFGF",
           "main_text_matched_substrings" : [
              {
                 "length" : 4,
                 "offset" : 0
              }
           ],
           "secondary_text" : "Zafer, Bulan\u0131k/Mu\u015f, T\u00fcrkiye"
        },
        "terms" : [
           {
              "offset" : 0,
              "value" : "Zafer"
           },
           {
              "offset" : 7,
              "value" : "DFGF"
           },
           {
              "offset" : 13,
              "value" : "Bulan\u0131k"
           },
           {
              "offset" : 21,
              "value" : "Mu\u015f"
           },
           {
              "offset" : 26,
              "value" : "T\u00fcrkiye"
           }
        ],
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
     }
  ],
  "status" : "OK"
}*/

