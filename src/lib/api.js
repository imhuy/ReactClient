import React, { Component, useEffect, useState } from 'react';
const URL = 'https://nodes-erver.herokuapp.com'
export async function fetchApi(params) {

    var rs = await fetch(`${URL}/post/0/6`);
    var responjson = await rs.json();

    return responjson;
}