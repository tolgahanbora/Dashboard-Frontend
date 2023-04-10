/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { useGetIdentity, useOne } from '@pankod/refine-core'
import { Profile } from 'components'

function MyProfile() {

  const {data: user} = useGetIdentity()
  const {data: userData, isLoading, isError} = useOne({
    resource:'users',
    id:user?.userid
  }) 
  
  const myProfile = userData?.data ?? []

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>

  return (
    <Profile 
    type="My"
    name={myProfile.name}
    email={myProfile.email}
    avatar={myProfile.avatar}
    properties={myProfile.allProperties}
    />
  )
}

export default MyProfile