<template>
    <table :class="$style.packageTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>FXPO Citizen Pass NFT</th>
          <th>FXPO m³ NFTs</th>
          <th>FXTE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pkg, index) in packages" :key="index">
          <td>{{ pkg.name }}</td>
          <td>{{ pkg.price }}</td>
          <td>{{ pkg.fxpo_citizen_pass_nft }}</td>
          <td>{{ pkg.fxpo_m3_nfts }}</td>
          <td>{{ pkg.fxte }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    packages: {
      type: Array as () => Array<{
        name: string;
        price: string;
        fxpo_citizen_pass_nft: string;
        fxpo_m3_nfts: string;
        fxte: string;
      }>,
      required: true,
    },
  });
  </script>
  
  <style lang="scss" module>
  .packageTable {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  
    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }
  
    th {
      background-color: #f4f4f4;
    }
  
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
  </style>
  