import React from "react"
import { useDispatch } from "react-redux"

const DispatchLogin = ({ action }) => {
  const dispatch = useDispatch()
  return dispatch(action)
}

export default DispatchLogin
