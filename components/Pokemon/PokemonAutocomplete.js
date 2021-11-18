import * as React from "react";

import { combineNameNickname, getPokemonImgSrc } from "lib/pokemon";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import PokemonData from "data/json/pokemon";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const PokemonSelect = ({
  inputValue,
  setInputValue,
  textFieldProps,
  ...props
}) => {
  return (
    <Autocomplete
      id="pokemon-select"
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue.split("（")[0]);
      }}
      options={PokemonData}
      autoHighlight
      getOptionLabel={(option) => combineNameNickname(option)}
      renderOption={(props, option) => {
        const combinedName = combineNameNickname(option);
        return (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={getPokemonImgSrc(option)}
              alt={combinedName}
            />
            {combinedName}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          {...textFieldProps}
          inputProps={{
            ...params.inputProps,
            ...textFieldProps.inputProps,
            className: `${params.inputProps.className || ""} ${
              textFieldProps.inputProps.className || ""
            }`,
          }}
        />
      )}
      {...props}
    />
  );
};

PokemonSelect.propTypes = {};
PokemonSelect.defaultProps = {
  textFieldProps: {},
};

export default PokemonSelect;
