Component({
  data: {
    categories: [
      {id: 1, iconName: "mom-and-baby", title: "Đồ chơi - Mẹ & Bé"},
      {id: 2, iconName: "phone-and-tablet", title: "Điện Thoại - Máy Tính Bảng"},
      {id: 3, iconName: "beauty-and-health", title: "Làm Đẹp - Sức Khỏe"},
      {id: 4, iconName: "electric-appliance", title: "Điện gia dụng"},
      {id: 5, iconName: "women-fashion", title: "Thời trang nữ"},
      {id: 6, iconName: "men-fashion", title: "Thời trang nam"},
      {id: 7, iconName: "women-shoes", title: "Giày, dép nữ"},
      {id: 8, iconName: "men-shoes", title: "Giày, dép nam"},
      {id: 9, iconName: "women-fashion-bag", title: "Túi thời trang nữ"},
      {id: 10, iconName: "men-fashion-bag", title: "Túi thời trang nam"},
      {id: 11, iconName: "backpack-and-valise", title: "Balo & Vali"},
      {id: 12, iconName: "view-more-less", title: "Xem tất cả"}
    ]
  },
  methods: {
    expandCategories() {
      console.log("khai expandCategories");
      const moreCategories = [
        {id: 13, iconName: "fashion-accessories", title: "Phụ kiện thời trang"},
        {id: 14, iconName: "watches-and-jewelry", title: "Đồng hồ và Trang sức"},
        {id: 15, iconName: "laptop-computer-accessories", title: "Laptop - Máy Vi Tính - Linh Kiện"},
        {id: 16, iconName: "home-and-life", title: "Nhà cửa & Đời sống"},
        {id: 17, iconName: "digital-equipment", title: "Thiết bị số - Phụ kiện số"},
        {id: 18, iconName: "cars-motorcycles-bicycles", title: "Ô Tô - Xe Máy - Xe Đạp"},
        {id: 19, iconName: "book", title: "Sách"},
        {id: 20, iconName: "electronic-refrigeration", title: "Điện tử - Điện lạnh"},
        {id: 21, iconName: "sports-picnic", title: "Thể Thao - Dã Ngoại"},
        {id: 22, iconName: "cameras", title: "Máy Ảnh - Máy Quay Phim"},
        {id: 23, iconName: "view-more-less", title: "Ẩn bớt"}
      ];
      const cloneCategories = [...this.data.categories];
      cloneCategories.splice(-1, 1);
      const newCategories = cloneCategories.concat(moreCategories);
      this.setData({categories: newCategories});
    },
    narrowCategories() {
      const cloneCategories = [...this.data.categories];
      const newCategories = cloneCategories.filter(item => item.id < 12);
      console.log(newCategories);
      newCategories.splice(newCategories.length, 1, {id: 12, iconName: "view-more-less", title: "Xem tất cả"});
      this.setData({categories: newCategories});
    }
  }
});