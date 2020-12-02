import React from 'react';

function orderData() {
return (
    <div class="ui huge teal top inverted fixed menu">
        <div class="item">
        <h3>Client Dashboard</h3>
        </div>
        <a class="item active" href='/clientHome'>
        Home
        </a>
        <a href='/orderSum' class="item">
        Orders
        </a>
        <a id="logout_btn" style={{marginLeft:942}} href="/" class="item">
        Logout
        </a>
    </div>
)


}
export default orderData;