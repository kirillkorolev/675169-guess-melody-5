import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import AuthScreen from "../auth-screen/auth-screen";

const App = (props) => {

  const {errorsCount} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomeScreen errorsCount={errorsCount}/>
        </Route>
        <Route path="/dev-artist" exact>
          <ArtistQuestionScreen />
        </Route>
        <Route path="/dev-genre" exact>
          <GenreQuestionScreen />
        </Route>
        <Route path="/lose" exact>
          <GameOverScreen />
        </Route>
        <Route path="/result" exact>
          <WinScreen />
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};


export default App;
