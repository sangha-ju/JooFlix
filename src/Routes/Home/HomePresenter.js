import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? <Loader /> : (
        <Container>
            { nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    { nowPlaying.map(movie => movie.title) }
                </Section>
            ) }
            { upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    { upcoming.map(movie => movie.title) }
                </Section>
            ) }
            { popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    { popular.map(movie => movie.title) }
                </Section>
            ) }
        </Container>
    )

HomePresenter.propsTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

const Container = styled.div `
    padding: 0px 10px;
`;

export default HomePresenter;