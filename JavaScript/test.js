{
    list = [{id: 1}, {id: 2}];
    list.some((item, index) => {
        if (item.id === 1) {
            item.id=3;
            return true;
        }
    });
    console.log(list);
}

