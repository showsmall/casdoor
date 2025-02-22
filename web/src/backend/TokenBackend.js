// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Setting from "../Setting";

export function getTokens(owner, page = "", pageSize = "") {
  return fetch(`${Setting.ServerUrl}/api/get-tokens?owner=${owner}&p=${page}&pageSize=${pageSize}`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
}

export function getToken(owner, name) {
  return fetch(`${Setting.ServerUrl}/api/get-token?id=${owner}/${encodeURIComponent(name)}`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
}

export function updateToken(owner, name, token) {
  let newToken = Setting.deepCopy(token);
  return fetch(`${Setting.ServerUrl}/api/update-token?id=${owner}/${encodeURIComponent(name)}`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(newToken),
  }).then(res => res.json());
}

export function addToken(token) {
  let newToken = Setting.deepCopy(token);
  return fetch(`${Setting.ServerUrl}/api/add-token`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(newToken),
  }).then(res => res.json());
}

export function deleteToken(token) {
  let newToken = Setting.deepCopy(token);
  return fetch(`${Setting.ServerUrl}/api/delete-token`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(newToken),
  }).then(res => res.json());
}
