Ember.TEMPLATES['application'] = Ember.Handlebars.compile('<header class="constrained main-header">    <section class="half-width">        <div class="logo left">            SIMPLE, AVAILABLE, DISTRIBUTED CLOUD STORAGE.        </div>        <div class="clear"></div>    </section>    <div class="clear"></div>    <div class="block-container blue has-shadow">        <div class="blue-linear header-bar">            <div class="header-bar-icon account-large left"></div>            <h1 class="title">Administration</h1>        </div>    </div></header><div id="container">{{outlet}}</div><footer class="constrained">    <div class="block-container blue has-shadow">        <div class="footer-bar blue-linear">            <section class="half-width">                <div class="left footer-info">Copyright &copy; 2012 Basho Technologies, Inc.</div>            </section>            <section class="half-width">                <div class="right footer-info">                    <a class="riak-logo" href="http://www.basho.com">Poweredy by</a>                </div>            </section>            <div class="clear"></div>        </div>    </div></footer>');
Ember.TEMPLATES['button'] = Ember.Handlebars.compile('<a class="row-button-edit">{{view.updateText}}</a>');
Ember.TEMPLATES['users_item'] = Ember.Handlebars.compile('{{#with view}}    <td>{{content.name}}</td>    <td>{{content.email}}</td>    <td><span class="display-item gray">{{content.key_id}}</span></td>    <td><span class="display-item gray">{{key_secret}}</span></td>    {{#if content.isDisabled}}      {{view RiakCsControl.ButtonView              updateText="Enable"              contentBinding="content"              functionBinding="controller.enableUser"}}    {{else}}      {{view RiakCsControl.ButtonView              updateText="Disable"              contentBinding="content"              functionBinding="controller.disableUser"}}    {{/if}}    {{view RiakCsControl.ButtonView            updateText="Revoke"            contentBinding="content"            functionBinding="controller.revokeCredentials"}}{{/with}}');
Ember.TEMPLATES['users'] = Ember.Handlebars.compile('<section class="constrained info">    <div class="block-container white">        <h1 class="title">User List</h1>        <div class="white-slab">            <div class="tab-container right">                <a {{action "viewUsers" this href=true}} class="active-tab">All</a>                <div class="hide-shadow clear"></div>            </div>            <div>                <table class="info-table">                    <thead>                        <tr>                            <th><h2 class="title">Name</h2></th>                            <th><h2 class="title">E-mail</h2></th>                            <th><h2 class="title">Access Key</h2></th>                            <th><h2 class="title">Secret Key</h2></th>                            <th><h2 class="title">&nbsp;</h2></th>                            <th><h2 class="title">&nbsp;</h2></th>                        </tr>                    </thead>                    {{collection RiakCsControl.UsersCollectionView contentBinding="controller" itemClass="standard-row"}}                </table>            </div>        </div>    </div></section>');
