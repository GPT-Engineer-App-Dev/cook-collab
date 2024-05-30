import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("Recipe submitted:", { recipeName, ingredients, instructions });
    toast({
      title: "Recipe submitted.",
      description: "Your recipe has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setRecipeName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Submit Your Recipe</Heading>
        <FormControl id="recipe-name" isRequired>
          <FormLabel>Recipe Name</FormLabel>
          <Input
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter the recipe name"
          />
        </FormControl>
        <FormControl id="ingredients" isRequired>
          <FormLabel>Ingredients</FormLabel>
          <Textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter the ingredients"
          />
        </FormControl>
        <FormControl id="instructions" isRequired>
          <FormLabel>Instructions</FormLabel>
          <Textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter the instructions"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit Recipe</Button>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;