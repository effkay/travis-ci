Travis.DataSource = SC.DataSource.extend({
  fetch: function(store, query) {
    if(query.url) {
      this.request(query.url()).notify(this, 'didFetchRecords', store, query).send();
      return YES;
    } else {
      return NO;
    }
  },
  request: function(url) {
    return SC.Request.getUrl(url).header({'Accept': 'application/json'}).json();
  },
  didFetchRecords: function(response, store, query) {
    store.loadRecords(query.recordType, response.get('body'));
    store.dataSourceDidFetchQuery(query);
  },

  // ..........................................................
  // RECORD SUPPORT
  //

  retrieveRecord: function(store, storeKey) {

    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  createRecord: function(store, storeKey) {

    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  updateRecord: function(store, storeKey) {

    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  destroyRecord: function(store, storeKey) {

    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done

    return NO ; // return YES if you handled the storeKey
  }

}) ;

