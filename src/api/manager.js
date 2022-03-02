import request from '@/api/request.js'


export function login(data) {
  return request({
    url: '/manager/login',
    method: 'get',
    params: data
  })
}


export function gethomebannarList(query) {
  return request({
    url: '/banner/find',
    method: 'get',
    params: query
  })
}

export function addhomebannar(query) {
  return request({
    url: '/banner/save',
    method: 'post',
    data: query
  })
}

export function editehomebannar(query) {
  return request({
    url: '/banner/update',
    method: 'post',
    data: query
  })
}

export function deletehomebannar(query) {
  return request({
    url: '/banner/delete',
    method: 'get',
    params: {id:query}
  })
}

export function getNotice(query) {
  return request({
    url: '/announcement/find',
    method: 'get',
    params: {pageNo:1,pageSize:10}
  })
}

export function addNotice(query) {
  return request({
    url: '/announcement/save',
    method: 'post',
    data: query
  })
}

export function deletNotice(query) {
  return request({
    url: '/announcement/delete',
    method: 'get',
    params: query
  })
}

export function eidNotice(query) {
  return request({
    url: '/announcement/update',
    method: 'post',
    data: query
  })
}