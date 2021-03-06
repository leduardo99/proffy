import React, { useRef, useEffect, useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components'
import {
  OptionTypeBase,
  Theme as SelectTheme,
  StylesConfig as SelectStyles
} from 'react-select'
import ReactSelect, { Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'

import { LabelContainer } from './styles'

interface Props extends SelectProps<OptionTypeBase, false> {
  name: string
  label?: string
}

export default function Select({ name, label, options, ...rest }: Props) {
  const selectRef = useRef<ReactSelect<OptionTypeBase>>(null)

  const { fieldName, defaultValue, registerField } = useField(name)

  const appTheme = useTheme()

  const selectStyles = useMemo<SelectStyles<OptionTypeBase, false>>(() => {
    return {
      control: (styles) => ({
        ...styles,
        height: '5.6rem',
        borderRadius: '0.8rem',
        paddingLeft: '1.4rem'
      })
    }
  }, [])

  const themeProps = useCallback(
    (theme: SelectTheme): SelectTheme => {
      return {
        ...theme,
        colors: {
          ...theme.colors,
          danger: appTheme.colors.error,
          dangerLight: '#FFBDAD',
          neutral0: appTheme.colors.boxFooter,
          neutral5: 'hsl(0, 0%, 95%)',
          neutral10: 'hsl(0, 0%, 90%)',
          neutral20: appTheme.colors.lineInWhite,
          neutral30: appTheme.colors.textInPrimary,
          neutral40: 'hsl(0, 0%, 60%)',
          neutral50: appTheme.colors.inputPlaceholder,
          neutral60: 'hsl(0, 0%, 40%)',
          neutral70: 'hsl(0, 0%, 30%)',
          neutral80: appTheme.colors.textBase,
          neutral90: 'hsl(0, 0%, 10%)',
          primary: appTheme.colors.primary,
          primary25: appTheme.colors.textInPrimary,
          primary50: appTheme.colors.primaryLighter,
          primary75: '#4C9AFF'
        }
      }
    },
    [appTheme.colors]
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }

        if (!ref.state.value) {
          return ''
        }

        return ref.state.value.value
      }
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <LabelContainer>
      {label && <small>{label}</small>}

      <ReactSelect
        defaultValue={
          defaultValue &&
          options.find((option) => option.value === defaultValue)
        }
        ref={selectRef}
        theme={themeProps}
        classNamePrefix="react-select"
        styles={selectStyles}
        options={options}
        {...rest}
      />
    </LabelContainer>
  )
}
