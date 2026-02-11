import { View, Text, ActivityIndicator } from 'react-native';
import { useGetProductsQuery } from '../../src/store/services/productApi';
import { FlashList } from '@shopify/flash-list';
import ProductCard from '../../src/components/ProductCard'; // We will build this next

export default function CatalogScreen() {
  const { data, error, isLoading } = useGetProductsQuery({ offset: 0, limit: 10 });

  if (isLoading) return <View className="flex-1 justify-center"><ActivityIndicator size="large" color="#1D7DFC" /></View>;
  
  if (error) return <View className="flex-1 justify-center items-center"><Text>Oops! Something went wrong.</Text></View>;

  return (
    <View className="flex-1 bg-surface p-4">
      <Text className="text-2xl font-bold mb-4">E-Shop</Text>
      <FlashList
        data={data}
        renderItem={({ item }) => <ProductCard product={item} />}
        estimatedItemSize={100}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}