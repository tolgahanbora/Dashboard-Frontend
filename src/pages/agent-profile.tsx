/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useParams } from '@pankod/refine-react-router-v6'
import {  useOne } from '@pankod/refine-core'
import { Profile } from 'components'

function AgentProfile() {

const {id } = useParams()
 
  const {data , isLoading, isError} = useOne({
    resource:'users',
    id: id as string
  }) 
  
  const myProfile = data?.data ?? []

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>

  return (
    <Profile 
    type="Agent"
    name={myProfile.name}
    email={myProfile.email}
    avatar={myProfile.avatar}
    properties={myProfile.allProperties}
    />
  )
}

export default AgentProfile