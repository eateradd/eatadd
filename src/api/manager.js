import request from '@/api/request.js'

// 登录

export function login(data) {
  return request({
    url: '/manager/login',
    method: 'get',
    params: data
  })
}

// banner
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

// 公告

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

//  问答

export function addQA(query) {
  return request({
    url: '/question_answer/save',
    method: 'post',
    data: query
  })
}

export function getQAList(query) {
  return request({
    url: '/question_answer/find',
    method: 'get',
    params: {pageNo:1,pageSize:10}
  })
}

export function eidQA(query) {
  return request({
    url: '/question_answer/update',
    method: 'post',
    data: query
  })
}

export function deletQA(query) {
  return request({
    url: '/question_answer/delete',
    method: 'get',
    params: query
  })
}