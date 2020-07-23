import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from "react-i18next"

const useStyles = makeStyles({
  selectFocus: {
    "&:focus": {
      background: 'transparent'
    }
  }
})

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()

  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  console.log(values.language);

  return (
    <ul>
      <Select
        value={values.language}
        onChange={(e) => handleChange(e)}
        disableUnderline
        inputProps={{
          name: 'language'
        }}
        classes={{
          select: classes.selectFocus
        }}
      >
        <MenuItem value={'en'}><p>English</p></MenuItem>
        <MenuItem value={'cn'}><p>中文</p></MenuItem>

      </Select>
    </ul>
  )
}

export default LanguageMenu