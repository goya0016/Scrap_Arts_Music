<div>
  <AppBar position="static">
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
      centered
    >
      <Tab Label="item One" {...a11yProps(1)}></Tab>
      <Tab Label="item Two" {...a11yProps(2)}></Tab>
      <Tab Label="item Three" {...a11yProps(3)}></Tab>
    </Tabs>
  </AppBar>

  <TabPanel value={value} index={0}></TabPanel>
  <TabPanel value={value} index={1}>
    LOOPS GO HERE c;
  </TabPanel>
  <TabPanel value={value} index={2}>
    {findInstrumentData.instrument_imgURL.map((itemIMG) => {
      <div>
        <img src={itemIMG}></img>
      </div>;
    })}

    <div>test</div>
  </TabPanel>
</div>;
